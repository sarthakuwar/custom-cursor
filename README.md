
Custom Cursor and Text Enlargement Page<br><br>
Welcome to the Custom Cursor and Text Enlargement Page! This simple web page showcases a unique feature where a custom cursor enhances the user experience by enlarging text upon hovering over it.

<ol>Table of Contents
<li>Features</li>
<li>Usage</li>
<li>Customization</li>
<li>Contributing</li>
<li>License</li>
</ol>



<b>Features</b><br>
Custom Cursor: The page features a custom-designed cursor to provide a visually appealing and unique browsing experience.<br>

Text Enlargement: When the custom cursor hovers over text on the page, the text is automatically enlarged, making it easier for users to read and interact with the content.<br>

Responsive Design: The page is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.<br>

<b>Usage</b><br>
To use the Custom Cursor and Text Enlargement feature on your own webpage, follow these simple steps:<br>

Include the JavaScript and CSS files:<br>

Copy the custom-cursor.js and custom-cursor.css files into your project.<br>

Link to these files in the <head> section of your HTML document:

html
Copy code<br>
<link rel="stylesheet" type="text/css" href="path/to/custom-cursor.css"><br>
<script src="path/to/custom-cursor.js"></script><br>
HTML Structure:

Ensure that your HTML has appropriate text elements that you want to be affected by the custom cursor. For example:<br>

html
Copy code
<p class="enlarge-on-hover">This text will be enlarged on hover.</p>
Add Class:<br>

Add the enlarge-on-hover class to the text elements you want to be enlarged on hover.
Initialize the Custom Cursor:

At the end of your HTML body, initialize the custom cursor by adding the following script:

html
Copy code
<script>
  CustomCursor.init();
</script>
Now, when users visit your webpage, they will experience the custom cursor and text enlargement effect.<br>

<b>Customization</b><br>
Feel free to customize the appearance and behavior of the custom cursor and text enlargement according to your preferences.<br> You can modify the CSS styles and JavaScript functions in the provided files to suit your design requirements.<br>

<b>Contributing</b><br>
Contributions are welcome! If you have ideas for improvement or new features, please submit a pull request or open an issue on the GitHub repository.<br>

<b>License<b><br>
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for your own projects.





