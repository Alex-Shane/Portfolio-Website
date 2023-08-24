import java.sql.*;
public class Logger {
	private int TxnID;
    private java.sql.Date date;
    private String TxnType;
    private int treeNum;
    private String user;
    public Logger (java.sql.Date date, String type ,int treeNum, String user)
    {
        this.date = date;
        TxnType = type;
        this.treeNum = treeNum;
        this.user = user;
    }

    public Logger (java.sql.Date date, String type, String user)
    {
        this.date = date;
        TxnType = type;
        this.user = user;
    }

    public void logAction ()
    {
        Connection conn = null;
        try
        {
            String url = WelcomePage.getURL();
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            String sqlFind = "Select Max (TxnID) as maxID from TxnLog";
            ResultSet rs = stmt.executeQuery (sqlFind);
            rs.next();
            TxnID = rs.getInt("maxID") + 1;
            String sqlInsert = "Insert Into TxnLog" + 
                " Values (" + TxnID + ", " + "\'" + date + "\'" + ", " + "\'" +TxnType + "\'" + ", " + treeNum + ", " + "\'" + user + "\'" + ");";
            stmt.executeUpdate (sqlInsert);
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
}
