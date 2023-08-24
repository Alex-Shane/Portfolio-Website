import javax.swing.JFrame;
import java.awt.event.*;
import java.awt.Color;
import javax.swing.*;
import java.awt.event.ActionListener; 
import java.awt.event.ActionEvent;
public class SearchPage
{
    private static String [][] data;
    private static String selected;
    private static JComboBox statusBox;
    private static JTextField searchEntry;
    private static String input;
    private static String[] searchStrings;
    public static void main (String [] args)
    {
        JFrame frame = new JFrame ();
        String[] searchStrings = {"Choose Catagory", "Status", "StreetName", "ComName"};
        JComboBox searchBox = new JComboBox(searchStrings);
        searchBox.setBounds (80, 200, 170, 150);
        frame.add (searchBox);
        selected = (String)searchBox.getSelectedItem();
        JTextField searchEntry = new JTextField ();
        searchEntry.setBounds (300, 250, 200, 50);
        frame.add (searchEntry);
        String [] statusStrings = {"Healthy", "Unhealthy", "Missing", "Young", "Stump", "Remove", "Unknown", "No space", "Dead"};
        statusBox = new JComboBox (statusStrings);
        statusBox.setBounds (300, 250, 200, 50);
        frame.add (statusBox);
        statusBox.setVisible (false);
        selected = "error";
        searchBox.addItemListener (new ItemListener() {
                public void itemStateChanged (ItemEvent e) {
                    if (e.getStateChange() == ItemEvent.SELECTED)
                    {
                        Object item = e.getItem();
                        if (((String)item).equals ("Status"))
                        {
                            statusBox.setVisible(true);
                            searchEntry.setVisible (false);
                            selected = "Status";
                        }
                        else if (((String)item).equals ("StreetName"))
                        {
                            statusBox.setVisible (false);
                            searchEntry.setVisible (true);
                            selected = "StreetName";
                        }
                        else if (((String)item).equals ("ComName"))
                        {
                            statusBox.setVisible (false);
                            searchEntry.setVisible (true);
                            selected = "ComName";
                        }
                        else if (((String)item).equals ("Choose Catagory"))
                        {
                            statusBox.setVisible (false);
                            searchEntry.setVisible (true);
                            selected = "error";
                        }
                    }
                }
            });
        JButton searchButton = new JButton ("Search");
        searchButton.setBounds (550, 250,100,50);
        frame.add (searchButton);
        JLabel title = new JLabel ("Please Search By Catagory: ");
        title.setBounds (250, 150, 500, 50);
        title.setFont (title.getFont().deriveFont(20.0f));
        frame.add (title);
        JLabel title2 = new JLabel ("Or Browse All Trees Below: ");
        title2.setBounds (250, 350, 500, 50);
        title2.setFont (title2.getFont().deriveFont (20.0f));
        frame.add (title2);
        searchButton.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    if (selected.equals ("error"))
                    {
                        System.out.println (selected);
                        frame.dispose();
                        System.out.println ("Error");
                    }
                    else
                    {   
                        if (selected.equals ("Status"))
                        {
                            input = (String)statusBox.getSelectedItem();
                        }
                        else
                        {
                            input = searchEntry.getText();
                        }
                        Searcher s = new Searcher (input, selected);
                        data = s.search();
                        SearchTable.main ();
                        frame.dispose();
                    }
                };
            });
        JButton BrowseAll = new JButton ("Browse All Trees");
        BrowseAll.setBounds (280, 420, 200, 50);
        frame.add (BrowseAll);
        BrowseAll.addActionListener (new ActionListener() {
            public void actionPerformed (ActionEvent e) {
                input = "";
                Searcher s = new Searcher (input, "StreetName");
                data = s.search ();
                SearchTable.main ();
                frame.dispose();
            };
        });
        JButton back = new JButton ("Go Back to Home Screen: ");
        back.setBounds (180, 550, 400, 50);
        frame.add (back);
        back.addActionListener (new ActionListener() {
                public void actionPerformed (ActionEvent e) {
                    String [] s = {""};
                    FunctionsPage2.main(s);
                    frame.dispose();
                }
            });
        frame.setLayout (null);
        frame.setSize (800,800);
        frame.getContentPane().setBackground(Color.WHITE);
        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
        frame.setVisible (true);
    }

    public static String[][] getData ()
    {
        return data;
    }

    public static String getSelected ()
    {
        return selected;
    }

    public static String getInput ()
    {
        return input;
    }
}
 