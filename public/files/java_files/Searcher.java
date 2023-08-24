import java.sql.*;
public class Searcher 
{
    private String searchFor;
    private String selected;
    private static String error;
    public Searcher (String input, String select)
    {
        searchFor = input;
        selected = select;
    }

    public String[][] search ()
    {
        Connection conn = null;
        try
        {
            String url = WelcomePage.getURL();
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            String sql;
            String sql2;
            ResultSet rs;
            int numResults;
            if (selected.equals ("ComName"))
            {
                sql = "Select count (" + selected + ") as num From treeinfo where " + selected + " like " + "\'" + "%" + searchFor + "%" + "\'";
                rs = stmt.executeQuery (sql);
                rs.next();
                numResults = rs.getInt ("num");
                sql2 = "Select * From treeinfo where " + selected + " like " + "\'" + "%" + searchFor + "%" + "\'";
            }
            else 
            {
                sql = "Select count (" + selected + ") as num From treeinfo where " + selected + " like " + "\'" + searchFor + "%" + "\'";
                rs = stmt.executeQuery (sql);
                rs.next();
                numResults = rs.getInt ("num");
                sql2 = sql2 = "Select * From treeinfo where " + selected + " like " + "\'" + searchFor + "%" + "\'";
            }
            String [][] data = new String [numResults][6];
            int counter = 1; 
            ResultSet rs2 =  stmt.executeQuery (sql2);
            {
                for (int r = 0; r < data.length; r++)
                {
                    rs2.next();
                    for (int c = 0; c < 6; c++)
                    {
                        if (c == 0)
                        {
                            data[r][c] = "" + counter;
                            counter++;
                        }
                        if (c == 1)
                        {
                            data [r][c] = "" + rs2.getInt("treeNum");
                        }
                        if (c == 2)
                        {
                            data[r][c] = "" + rs2.getInt ("streetNum");
                        }
                        if (c == 3)
                        {
                            data [r][c] = "" + rs2.getString ("streetName");
                        }
                        if (c == 4)
                        {
                            data [r][c] = "" + rs2.getString ("status");
                        }
                        if (c == 5)
                        {
                            data [r][c] = "" + rs2.getString ("comName");
                        }
                    }
                }
            }
            conn.close();
            return data;
        }
        catch (SQLException e)
        {
            System.out.println (e.getMessage());
            String [][] error = new String [1][1];
            error [0][0] = "";
            return error;
        }
    }
    
    public static String getMessage()
    {
        return error;
    }
}