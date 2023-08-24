

import java.awt.image.BufferedImage;
import java.awt.event.*;
import java.awt.Color;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.Graphics2D;
import java.time.LocalDate;
public class WelcomePage
{
    private static boolean authorized;
    private static String url = "jdbc:sqlserver://18.191.145.19:1433; databasename=holmbywestwood; user=HWUser; password=HWpw;";
    private static String user;
    public static void main (String[] args)
    {
        JFrame frame = new JFrame ();
        frame.setLayout (null);
        frame.setSize (800, 800);
        frame.getContentPane().setBackground(Color.WHITE);
        authorized = false;
        File ImgFile = new File ("pie.png");
        BufferedImage img = null;
        try 
        {
            img = ImageIO.read (ImgFile);
        }
        catch (IOException e)
        {
            System.out.println ("Error: " + e); 
        }
        BufferedImage img1 = new BufferedImage (800,600,img.getType());
        Graphics2D g2d = img1.createGraphics();
        g2d.drawImage(img, 0,0,800,600,null);
        g2d.dispose();
        ImageIcon icon = new ImageIcon (img1);
        JLabel lbl = new JLabel();
        lbl.setIcon (icon);
        lbl.setBounds (0,0,800,600);
        JLabel email = new JLabel ("Please enter your email: ");
        email.setBounds (120, 650, 200, 50);
        JTextField entry = new JTextField (8);
        entry.setBounds (300, 650, 200, 50);
        JButton go = new JButton ("Enter");
        go.setBounds (530, 650, 50, 50);
        go.addActionListener (new ActionListener() {
            public void actionPerformed (ActionEvent e) {
                user = entry.getText();
                Checker c = new Checker (user);
                if (c.isAuthorized())
                {
                    authorized = true;
                    LocalDate confirmed = LocalDate.now();
                    java.sql.Date sqlDate = java.sql.Date.valueOf(confirmed);
                    Logger l = new Logger (sqlDate, "Login", user);
                    l.logAction();
                }
                String [] s = {""};
                FunctionsPage2.main(s);
                frame.dispose();
            }
        });
        frame.add(email);
        frame.add (entry);
        frame.add (go);
        frame.add (lbl);
        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
        frame.setVisible (true);
    }
    public static String getURL()
    {
        return url;
    }
    public static boolean isValid()
    {
        return authorized;
    }
    public static String getUser()
    {
        return user;
    }
}
