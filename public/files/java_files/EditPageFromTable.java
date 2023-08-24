
import java.awt.event.*;
import java.awt.Color;
import javax.swing.*;
import java.sql.*;
import java.time.LocalDate;
public class EditPageFromTable
{
    ResultSet rs;
    int entryTreeNum,treeNumber,streetNumber,zip;
    String streetName,treeStreet,city,state,sciName,comName,replace,status, treeName;
    double parkway;
    String AuthDate;
    public EditPageFromTable() 
    {
        Connection conn = null;
        try
        {
            String url = WelcomePage.getURL();
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            entryTreeNum = SearchTable.getTreeNumber();
            String sql = "Select * From treeinfo where treeNum like " + "\'" + entryTreeNum + "%" + "\'";
            rs = stmt.executeQuery (sql);
            rs.next();
            treeNumber = rs.getInt ("treeNum");
            streetNumber = rs.getInt ("streetNum");
            streetName = rs.getString ("streetName");
            treeStreet = rs.getString ("treeStreet");
            city = rs.getString ("city");
            state = rs.getString ("state");
            zip = rs.getInt ("zip");
            sciName = rs.getString ("sciName");
            comName = rs.getString ("comName");
            replace = rs.getString ("replacement");
            status = rs.getString ("status");
            parkway = rs.getDouble ("parkway");
            treeName = rs.getString ("treeName");
            AuthDate = rs.getString ("AuthDate");
        }
        catch (SQLException e)
        {
            System.out.println (e.getMessage());
        }
        finally
        {
            try
            {
                if(conn!=null)
                    conn.close();
            }
            catch(SQLException se)
            {
                se.printStackTrace();
            }//end finally try
        }
        JFrame frame = new JFrame ();
        frame.setLayout (null);
        frame.setSize (800,800);
        frame.getContentPane().setBackground(Color.WHITE);
        JTextField TreeNumber = new JTextField (4);
        TreeNumber.setBounds (350, 20, 225, 50);
        TreeNumber.setText ("" + treeNumber);
        JLabel lblTreeNum = new JLabel ("Tree Number");
        lblTreeNum.setBounds (250, 20, 225, 50);
        JTextField StreetNumber = new JTextField (6);
        StreetNumber.setBounds (350, 70, 225, 50);
        StreetNumber.setText ("" + streetNumber);
        JLabel lblStreetNum = new JLabel ("Street Number");
        lblStreetNum.setBounds (250, 70, 225, 50);
        JTextField StreetName = new JTextField (8);
        StreetName.setBounds (350, 120, 225, 50);
        StreetName.setText (streetName);
        JLabel lblStreetName = new JLabel ("Street Name");
        lblStreetName.setBounds (250, 120, 225, 50);
        JTextField TreeStreet = new JTextField (8);
        TreeStreet.setBounds (350, 170, 225, 50);
        TreeStreet.setText (treeStreet);
        JLabel lblTreeStreet = new JLabel ("Tree Street");
        lblTreeStreet.setBounds (250, 170, 225, 50);
        JTextField TreeName = new JTextField (6);
        TreeName.setBounds (350, 220, 225, 50);
        TreeName.setText (treeName);
        JLabel lblTreeName = new JLabel ("Tree Name");
        lblTreeName.setBounds (250, 220, 225, 50);
        JTextField City = new JTextField (10);
        City.setBounds (350, 270, 225, 50);
        City.setText (city);
        JLabel lblCity = new JLabel ("City");
        lblCity.setBounds (250, 270, 225, 50);
        JTextField State = new JTextField (4);
        State.setBounds (350, 320, 225, 50);
        State.setText (state);
        JLabel lblState = new JLabel ("State");
        lblState.setBounds (250, 320, 225, 50);
        JTextField ZIP = new JTextField (4);
        ZIP.setBounds (350, 370, 225, 50);
        ZIP.setText ("" + zip);
        JLabel lblZIP = new JLabel ("ZIP");
        lblZIP.setBounds (250, 370, 225, 50);
        JTextField ScientificName = new JTextField (8);
        ScientificName.setBounds (350,420, 225, 50);
        ScientificName.setText (sciName);
        JLabel lblSciName = new JLabel ("Scientific Name");
        lblSciName.setBounds (250, 420, 225, 50);
        JTextField CommonName = new JTextField (4);
        CommonName.setBounds (350, 470, 225, 50);
        CommonName.setText (comName);
        JLabel lblComName = new JLabel ("Common Name");
        lblComName.setBounds (250, 470, 225, 50);
        JTextField Replacement = new JTextField (8);
        Replacement.setBounds (350, 520, 225, 50);
        Replacement.setText (replace);
        JLabel lblRep = new JLabel ("Replacement");
        lblRep.setBounds (250, 520, 225, 50);
        JTextField Status = new JTextField (4);
        Status.setBounds (350, 570, 225, 50);
        Status.setText (status);
        JLabel lblStatus = new JLabel ("Status");
        lblStatus.setBounds (250, 570, 225, 50);
        JTextField ParkwaySize = new JTextField (4);
        ParkwaySize.setBounds (350, 620, 225, 50);
        ParkwaySize.setText ("" + parkway);
        JLabel lblPSize = new JLabel ("Parkway Size");
        lblPSize.setBounds (250, 620, 225, 50);
        JButton BtnSave = new JButton ("Save");
        JButton back = new JButton ("Go Back to Home Screen: ");
        if (AuthDate != null)
        {
            JLabel lblAuthDate = new JLabel ("Last Edited on " + AuthDate);
            lblAuthDate.setBounds (250, 670, 225, 50);
            frame.add (lblAuthDate);
            BtnSave.setBounds (550, 720, 200, 50);
            back.setBounds (150, 720, 300, 50);
        }
        else
        {
            BtnSave.setBounds (550, 700, 200, 50);
            back.setBounds (150, 700, 300, 50);
        }
        BtnSave.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    int treeNumber2 = Integer.parseInt (TreeNumber.getText());
                    int streetNumber = Integer.parseInt (StreetNumber.getText());
                    double parkwaySize = Double.parseDouble (ParkwaySize.getText());
                    LocalDate confirmed = LocalDate.now();
                    java.sql.Date sqlDate = java.sql.Date.valueOf(confirmed);
                    Tree tree1 = new Tree (treeNumber2, streetNumber, StreetName.getText(), TreeStreet.getText() ,City.getText(), State.getText(), ZIP.getText(), ScientificName.getText(),CommonName.getText(), Replacement.getText(), Status.getText(), parkwaySize, TreeName.getText(),sqlDate);
                    tree1.save();
                    Logger l = new Logger (sqlDate, "Edit", treeNumber2, WelcomePage.getUser());
                    l.logAction();
                    String [] s = {""};
                    FunctionsPage2.main(s);
                    frame.dispose();
                }
            });
        back.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    String [] s = {""};
                    FunctionsPage2.main(s);
                    frame.dispose();
                }
            });
        frame.add (BtnSave);
        frame.add (back);
        frame.add (TreeNumber);
        frame.add (StreetNumber);
        frame.add (StreetName);
        frame.add (TreeStreet);
        frame.add (TreeName);
        frame.add (City);
        frame.add (State);
        frame.add (ZIP);
        frame.add (ScientificName);
        frame.add (CommonName);
        frame.add (Replacement);
        frame.add (Status);
        frame.add (ParkwaySize);
        frame.add (lblTreeNum);
        frame.add (lblStreetNum);
        frame.add (lblStreetName);
        frame.add (lblTreeStreet);
        frame.add (lblTreeName);
        frame.add (lblCity);
        frame.add (lblState);
        frame.add (lblZIP);
        frame.add (lblSciName);
        frame.add (lblComName);
        frame.add (lblRep);
        frame.add (lblStatus);
        frame.add (lblPSize);
        frame.setVisible (true);
        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
    } 

    public static void main ()
    {
        EditPageFromTable ep = new EditPageFromTable();
    }
}
