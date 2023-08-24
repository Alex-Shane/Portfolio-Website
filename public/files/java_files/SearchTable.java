import java.sql.*;
import java.util.*;
import javax.swing.*;
import java.awt.*;
import javax.swing.table.JTableHeader;
import javax.swing.event.*;
import java.awt.event.ActionListener; 
import java.awt.event.ActionEvent;
import javax.swing.JTable;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.io.Writer;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.FileOutputStream;
import java.io.*;
public class SearchTable
{
    private JTable table;
    private static int enteredTreeNum;
    private static String fileName;
    public SearchTable ()
    {
        JFrame frame = new JFrame ("Search Results");
        JPanel panel = new JPanel ();
        String [] columnNames = {"Result #:","Tree #:","Street #:","Street Name:","Status:", "Common Name:"};
        table = new JTable (SearchPage.getData(), columnNames);
        table.setBorder(BorderFactory.createLineBorder(Color.black));
        JTableHeader header = table.getTableHeader();
        header.setBackground (Color.green);
        JScrollPane pane = new JScrollPane (table);
        table.setAutoResizeMode (JTable.AUTO_RESIZE_OFF);
        panel.add (pane); 
        JLabel ask = new JLabel ("If you wish to edit, enter tree# of the tree you want to change and press Go");
        ask.setBounds (100,25, 450, 20);
        ask.setFont (ask.getFont().deriveFont(16.0f));
        panel.add (ask);
        JTextField entry = new JTextField (6);
        entry.setBounds (530, 25, 60, 20);
        panel.add (entry);
        JButton go = new JButton ("Go");
        go.setBounds (610, 25, 60, 20);
        panel.add (go);
        go.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    try 
                    {
                        enteredTreeNum = Integer.parseInt (entry.getText());                    
                    }
                    catch (NumberFormatException n)
                    {
                        System.out.println ("No number entered");
                    }
                    if (WelcomePage.isValid())
                    {
                        EditPageFromTable.main();
                        frame.dispose();
                    }
                    else
                    {
                        System.out.println ("You are not authorized to edit trees in the data base." + "\n" + "If you have questions, please contact Alex (ashane1@hwemail.com) or Adam Shane (adam.m.shane@gmail.com)");
                    }
                }
            });
        JButton back = new JButton ("Go Back to Home Screen: ");
        back.setBounds (380, 50, 300, 50);
        panel.add (back);
        back.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    String [] s = {""};
                    FunctionsPage2.main(s);
                    frame.dispose();
                }
            });
        JButton download = new JButton ("Download as .csv file");
        download.setBounds (600, 50, 200, 50);
        panel.add (download);
        download.addActionListener (new ActionListener () {
                public void actionPerformed (ActionEvent e) {
                    SearchTable.download();
                    System.out.println ("File saved as " + "\"" +SearchTable.getFileName() + ".csv" +"\"");
                }
            });
        frame.add (panel);
        frame.setSize (800,800);
        frame.getContentPane().setBackground(Color.WHITE);
        frame.setUndecorated (true);
        frame.getRootPane().setWindowDecorationStyle (JRootPane.PLAIN_DIALOG);
        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    public static void download ()
    {
        if (!SearchPage.getInput().equals(""))
        {
            fileName = "Search results for trees where " + SearchPage.getSelected() + " is " + SearchPage.getInput();
        }
        else 
        {
            fileName = "Search results for all trees in database";
        }
        try (Writer writer = new BufferedWriter(new OutputStreamWriter(
                    new FileOutputStream(fileName + ".csv"), "utf-8"))) {
            String output;
            output = "Result #:" + "," + "Tree #:" + "," + "Street #:" + "," + "Street Name:" + "," + "Status:" + ", " + "Common Name:" +"\n";
            String [][] results = SearchPage.getData();
            for (int r = 0; r < results.length; r++)
            {
                for (int c = 0; c < results[0].length; c++)
                {
                    output += results [r][c] + ",";
                }
                output += "\n";
            }
            writer.write(output);
            writer.close();
        }
        catch (IOException ex) {
            System.out.println (ex.getMessage());
        } 
    }

    public static String getFileName()
    {
        return fileName;
    }

    public static int getTreeNumber ()
    {
        return enteredTreeNum;
    }

    public static void main ()
    {
        SearchTable st = new SearchTable ();
    }
}
