import java.sql.*;
public class Tree
{
    private int treeNum,streetNum;
    private double parkway;
    private String streetName,treeStreet,city,state,zip,sciName,comName,replace,status,treeName;
    private java.sql.Date AuthDate;
    public Tree(int treeNum, int streetNum, String streetName,String treeStreet,String city, String state, String zip, String sciName, String comName, String replace, String status, double parkway,String treeName,java.sql.Date confirmed)
    {
        this.treeNum = treeNum;
        this.streetNum = streetNum;
        this.streetName = streetName;
        this.treeStreet = treeStreet;
        this.treeName = treeName;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.sciName = sciName;
        this.comName = comName;
        this.replace = replace;
        this.status = status;
        this.parkway = parkway;
        AuthDate = confirmed;
    }

    public Tree(int streetNum, String streetName,String treeStreet,String city, String state, String zip, String sciName, String comName, String replace, String status, double parkway, String treeName)
    {
        treeNum = 0;
        this.streetNum = streetNum;
        this.streetName = streetName;
        this.treeStreet = treeStreet;
        this.treeName = treeName;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.sciName = sciName;
        this.comName = comName;
        this.replace = replace;
        this.status = status;
        this.parkway = parkway;
        AuthDate = null;
    }

    public void add ()
    {
        Connection conn = null;
        try
        {
            String url = WelcomePage.getURL();
            conn = DriverManager.getConnection(url);
            //System.out.println ("Connection to SQLITE has been established.");
            Statement stmt = conn.createStatement();
            String data = "Select Max (treeNum) as maxtreenum from treeinfo";
            ResultSet rs = stmt.executeQuery (data);
            rs.next();
            treeNum = rs.getInt("maxtreenum") + 1;
            //System.out.println (treeNum);
            String Sql = "Insert Into TreeInfo" +
                " Values (" + treeNum + ", "+ streetNum + ", " + "\'" + streetName + "\'" + ", " + "\'" + city + "\'" + ", " + "\'" + state + "\'" + ", " + zip + ", " + "\'" + sciName + "\'" + ", " + "\'" + comName + "\'" + ", " + "\'" + replace + "\'" + ", " + "\'" + status + "\'" + ", " + "\'" + parkway + "\'" + ", " + "\'" + treeStreet + "\'" + ", " + "\'" + treeName + "\'" + ", " + AuthDate +");";
            //System.out.println (Sql + "\n");
            stmt.executeUpdate (Sql);   
            //System.out.println ("Operation Successful");
        }
        catch (SQLException e)
        {
            System.out.println (e.getMessage());
        }
        finally 
        {
            try 
            {
                if (conn != null)
                {
                    conn.close();
                }
            }
            catch (SQLException ex)
            {
                System.out.println (ex.getMessage());
            }
        }
    }

    public void save()
    {
        Connection conn = null;
        try
        {
            String url = WelcomePage.getURL();
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            String Sql = "Update TreeInfo" +
                " set streetNum = " + streetNum + ", " + 
                " streetName = "+ "\'" + streetName + "\'" + ", " +
                " city = " + "\'" + city + "\'" + ", " +
                " state = " + "\'" + state + "\'" + ", " +
                " zip = " + zip + ", " +
                " sciName = "+ "\'" + sciName + "\'" + ", " +
                " comName = "+ "\'" + comName + "\'" + ", " +
                " replacement = "+ "\'" + replace + "\'" + ", " +
                " status = "+ "\'" + status + "\'" + ", " +
                " parkway = " + parkway + ", " +
                " treeStreet = "+ "\'" + treeStreet + "\'" + ", " +
                " treeName = "+ "\'" + treeName + "\'" + ", " +
                " AuthDate = "+ "\'" + AuthDate + "\'" + 
                " where treeNum = " + " " +treeNum + ";";
            //System.out.println (Sql + "\n");
            stmt.executeUpdate (Sql);   
            //System.out.println ("Operation Successful");
        }
        catch (SQLException e)
        {
            System.out.println (e.getMessage());
        }
        finally 
        {
            try 
            {
                if (conn != null)
                {
                    conn.close();
                }
            }
            catch (SQLException ex)
            {
                System.out.println (ex.getMessage());
            }
        }
    }
    public int getTreeNum ()
    {
        return treeNum;
    }
}
