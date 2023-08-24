
import java.awt.event.*;
import java.awt.Color;
import javax.swing.*;
import java.time.LocalDate;
public class AddPage
{
    public static void main (String [] args)
    {
        JFrame frame = new JFrame ();
        frame.setLayout (null);
        frame.setSize (800,800);
        frame.getContentPane().setBackground(Color.WHITE);
        JTextField StreetNumber = new JTextField (6);
        StreetNumber.setBounds (350, 50, 225, 50);
        JLabel lblStreetNum = new JLabel ("Street Number");
        lblStreetNum.setBounds (250, 50, 225, 50);
        JTextField StreetName = new JTextField (8);
        StreetName.setBounds (350, 100, 225, 50);
        JLabel lblStreetName = new JLabel ("Street Name");
        lblStreetName.setBounds (250, 100, 225, 50);
        JTextField TreeStreet = new JTextField (8);
        TreeStreet.setBounds (350, 150, 225, 50);
        JLabel lblTreeStreet = new JLabel ("Tree Street");
        lblTreeStreet.setBounds (250, 150, 225, 50);
        JTextField TreeName = new JTextField (6);
        TreeName.setBounds (350, 200, 225, 50);
        JLabel lblTreeName = new JLabel ("Tree Name");
        lblTreeName.setBounds (250, 200, 225, 50);
        JTextField City = new JTextField (10);
        City.setBounds (350, 250, 225, 50);
        JLabel lblCity = new JLabel ("City");
        lblCity.setBounds (250, 250, 225, 50);
        JTextField State = new JTextField (4);
        State.setBounds (350, 300, 225, 50);
        JLabel lblState = new JLabel ("State");
        lblState.setBounds (250, 300, 225, 50);
        JTextField ZIP = new JTextField (4);
        ZIP.setBounds (350, 350, 225, 50);
        JLabel lblZIP = new JLabel ("ZIP");
        lblZIP.setBounds (250, 350, 225, 50);
        JTextField ScientificName = new JTextField (8);
        ScientificName.setBounds (350,400, 225, 50);
        JLabel lblSciName = new JLabel ("Scientific Name");
        lblSciName.setBounds (250, 400, 225, 50);
        JTextField CommonName = new JTextField (4);
        CommonName.setBounds (350, 450, 225, 50);
        JLabel lblComName = new JLabel ("Common Name");
        lblComName.setBounds (250, 450, 225, 50);
        JTextField Replacement = new JTextField (8);
        Replacement.setBounds (350, 500, 225, 50);
        JLabel lblRep = new JLabel ("Replacement");
        lblRep.setBounds (250, 500, 225, 50);
        JTextField Status = new JTextField (4);
        Status.setBounds (350, 550, 225, 50);
        JLabel lblStatus = new JLabel ("Status");
        lblStatus.setBounds (250, 550, 225, 50);
        JTextField ParkwaySize = new JTextField (4);
        ParkwaySize.setBounds (350, 600, 225, 50);
        JLabel lblPSize = new JLabel ("Parkway Size");
        lblPSize.setBounds (250, 600, 225, 50);
        JButton BtnAdd = new JButton ("Add");
        BtnAdd.setBounds (500, 650, 200, 50);
        BtnAdd.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    int streetNumber = Integer.parseInt (StreetNumber.getText());
                    double parkwaySize = Double.parseDouble (ParkwaySize.getText());
                    LocalDate confirmed = LocalDate.now();
                    java.sql.Date sqlDate = java.sql.Date.valueOf(confirmed);
                    System.out.println (sqlDate);
                    Tree tree1 = new Tree (streetNumber, StreetName.getText(),TreeStreet.getText() ,City.getText(), State.getText(), ZIP.getText(), ScientificName.getText(),CommonName.getText(), Replacement.getText(), Status.getText(), parkwaySize, TreeName.getText());
                    tree1.add();
                    int treeNum = tree1.getTreeNum();
                    Logger l = new Logger (sqlDate, "Add", treeNum, WelcomePage.getUser());
                    String [] s = {""};
                    FunctionsPage2.main(s);
                    frame.dispose();
                }
            });
        JButton back = new JButton ("Go Back to Home Screen: ");
        back.setBounds (150, 650, 300, 50);
        frame.add (back);
        back.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    String [] s = {""};
                    FunctionsPage2.main(s);
                    frame.dispose();
                }
            });
        frame.add (BtnAdd);
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
}