
import java.awt.FlowLayout;
import java.awt.image.BufferedImage;
import java.awt.event.*;
import java.awt.Color;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.Graphics2D;
import java.sql.*;
import java.time.LocalDate;
public class FunctionsPage2
{
    private static JFrame frame;
    public static void main (String[] args)
    {
        frame = new JFrame ();
        frame.setLayout (null);
        frame.setSize (800, 800);
        frame.getContentPane().setBackground(Color.WHITE);
        File ImgFile = new File ("green team logo.bmp");
        BufferedImage img = null;
        try 
        {
            img = ImageIO.read (ImgFile);
        }
        catch (IOException e)
        {
            System.out.println ("Error: " + e); 
        }
        BufferedImage img1 = new BufferedImage (800,500,img.getType());
        Graphics2D g2d = img1.createGraphics();
        g2d.drawImage(img, 0,0,800,500,null);
        g2d.dispose();
        ImageIcon icon = new ImageIcon (img1);
        JLabel lbl = new JLabel();
        lbl.setIcon (icon);
        lbl.setBounds (0,0,800,500);
        JButton BtnSearch = new JButton ("Search");
        BtnSearch.setBounds(100,550,150,50);
        JButton BtnAdd = new JButton ("Add");
        BtnAdd.setBounds (300, 550, 150, 50);
        JButton Reenter = new JButton ("Re-enter email");
        Reenter.setBounds (500, 550, 150, 50);
        BtnSearch.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    String [] s = {""};
                    SearchPage.main (s);
                    frame.dispose();
                }
            });
        BtnAdd.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    if (WelcomePage.isValid())
                    {
                        String [] s = {""};
                        AddPage.main(s);
                        frame.dispose();
                    }
                    else
                    {
                        System.out.println ("You are not authorized to add trees to the data base." + "\n" + "If you have questions, please contact Alex (ashane1@hwemail.com) or Adam Shane (adam.m.shane@gmail.com)");
                    }
                }
            });
        Reenter.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e)
                {
                    String [] s = {""};
                    WelcomePage.main(s);
                    frame.dispose();
                }
            });
        frame.add (lbl);
        frame.add (BtnSearch);
        frame.add (BtnAdd);
        frame.add (Reenter);
        frame.setVisible (true);
        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
    }
}

