import java.sql.*;
public class Checker {
	private String entered;
    public Checker (String email)
    {
        entered = email;
    }

    public boolean isAuthorized()
    {
        Connection conn = null;
        try
        {
            String url = WelcomePage.getURL();
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            String sql = "SELECT count (email) as auth from users where email = " + "\'" + entered + "\'";
            ResultSet rs = stmt.executeQuery (sql);
            rs.next();
            int amount = rs.getInt("auth");
            conn.close();
            return amount == 1;
        }
        catch (SQLException e)
        {
            System.out.println (e.getMessage());
            return false;
        } 
    }
}
