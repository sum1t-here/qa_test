## Selenium ##

Selenium is an open-source (free) automated testing framework for validating web applications across multiple browsers and platforms. Selenium Test Scripts can be written in a variety of programming languages, including Java, C#, Python, and others. Selenium Testing is the term for testing done using the Selenium testing tool.

Selenium Software is a collection of tools, each of which caters to a specific organization's Selenium QA testing requirements. The following is a list of tools incorporated within Selenium:

- Selenium Integrated Development Environment (IDE).
- Selenium Remote Control (RC).
- Selenium WebDriver.
- Selenium Grid.

Selenium is a package of several testing tools. It is therefore often referred to as a Selenium Suite with each of these tools designed to cater to a different testing requirement.

- Selenium Integrated Development Environment (IDE): It is a Firefox/Chrome plug-in that is developed to speed up the creation of automation scripts by recording the user actions on the web browser and exporting them as a reusable script.
- Selenium Remote Control (RC): It is a server that enables users to generate test scripts in their preferred programming language. It accepts commands from the test scripts and sends them to the browser as Selenium core JavaScript commands, for the browser to behave accordingly.
- Selenium WebDriver: It is a programming interface that helps create and run test cases by directly communicating with the web browser and using its native compatibility to automate. Unlike RC, it doesn’t require an additional server to create and run test cases.
- Selenium Grid: It allows parallel execution of tests on different browsers and operating systems by distributing commands to other machines simultaneously.


## *Web driver in SELENIUM* ##

A WebDriver in Selenium is a programming interface that allows you to automate and control web browsers by simulating user actions such as clicking, typing, navigating, and interacting with web elements. Selenium WebDriver operates across different browsers (like Chrome, Firefox, Edge, and Safari) and supports various programming languages including Java, Python, and C#

WebDriver acts as a bridge between your automation scripts and the web browser:

- Your test commands are sent via Selenium code to a browser-specific driver (e.g., ChromeDriver for Chrome).

- The browser driver translates these commands into browser actions.

- The browser executes the actions, providing responses back through the driver to your script.

***WebDriver is the core engine in Selenium responsible for driving browsers in a way that closely mimics real-user interactions for testing and automation purposes***

WebDriver in Selenium is an API. Specifically, it is an open-source API (Application Programming Interface) that defines a set of commands and programming interfaces for automating and controlling web browsers. The WebDriver API allows you to interact with browsers programmatically in a way that closely mimics user actions such as clicking, typing, navigating, and more.

Technically, WebDriver is both:

A compact object-oriented API or set of interfaces that you use in various programming languages (such as Java, Python, C#, and JavaScript) to write automation scripts.

An implementation that communicates with browser-specific drivers (like ChromeDriver or GeckoDriver) to execute those commands in the browser.

So, when you use Selenium WebDriver, you are primarily writing code against its API to automate browser actions.

## Advantages of using selenium

- Open-Source: Selenium's greatest strength, as previously said, is that it is a freeware and portable tool. There are no out-of-pocket expenses. The utility can be downloaded for free, and community-based help is also accessible.
- Language assistance: Java, Perl, Python, C#, Ruby, Groovy, JavaScript, and other languages are supported by Selenium. It has its own script, yet it is not constrained by it. It can work with a variety of languages, depending on the developers' and testers' preferences.
- Compatible with a variety of operating systems: Selenium may run on a variety of operating systems, including Windows, Mac OS X, Linux, and UNIX. A customized testing suite can be constructed on any platform and then executed on another using the Selenium suite of products. For example, you may write test cases in Windows and run them on a Linux system with ease.
- Browser compatibility: Selenium is compatible with a variety of web browsers, including Internet Explorer, Chrome, Firefox, Opera, and Safari. When running tests and testing them across multiple browsers at the same time, this becomes really useful.
- Programming languages and framework support: Selenium works with a variety of programming languages and frameworks. For source code compilation, it can, for example, integrate with ANT or Maven frameworks. It may also be used to test apps and generate reports using the TestNG framework. Continuous Integration (CI), can integrate with Jenkins or Hudson, and it can also integrate with other open-source tools to offer other functionalities.
- Tests on a variety of devices: On Android, iPhone, and Blackberry, Selenium Test Automation can be used to automate mobile web application testing. This can aid in the generation of necessary results and the ongoing resolution of bugs present in the application.

### Automation Testing ###
Automation Testing or Test Automation is a process of automating the manual testing process of an application or a system by using testing tools that allow you to create scripts that can be executed repeatedly, generating detailed test reports of the application or system under test.
The advantages of Automated Testing are:

- It supports both the performance and functional testing of an application or system.
- It facilitates the execution of repeated test cases.
- It allows the parallel execution of the test cases.
- It improves the accuracy and efficiency of the system by reducing the manual intervention of humans to generate test cases.
- It helps in testing a large-scale test matrix.
- It saves valuable time and money for the testing team involved in the project.

# *What is Selenese? Explain different types of Selenium commands.* #

The language used for writing test scripts in Selenium IDE is called Selenese. It is a set of commands used to test your web application or system. Selenium commands could be divided into 3 major categories:

- Actions: These are the commands interacting directly with web applications.
- Accessors: These are the commands which allow users to store values in a user-defined variable.
- Assertions: They enable a comparison of the current state of the application with its expected state.

# *What is meant by a locator and name a few different types of locators present in Selenium.* #

A locator is an address for uniquely identifying web elements within a web page. There are different types of locators present in Selenium to identify web elements uniquely and accurately like:

- ID
- ClassName
- Name
- TagName
- LinkText
- PartialLinkText
- Xpath
- CSS Selector
- DOM.

# *What is exception test in Selenium?* #

An exception test is a test that expects an exception to be thrown inside a test class. It expects a @Test annotation followed by the expected exception name in the brackets.

Eg: ```@Test(expectedException = NoSuchElementException.class)``` is an exception test for missing elements in Selenium.

# *What is XPath in Selenium? Explain XPath Absolute and XPath Relative.* #

XPath, also defined as XML-Path (Extensible Markup Language Path), is a language used to query XML documents and provide functionalities like locating elements in Selenium by iterating through each element in a webpage. In XPath, data is stored in a key-value pair format similar to an HTML tag. It uses a single slash, i.e. ‘ / ’ for creating an absolute path, and a double slash, i.e. ‘ // ’ for creating a relative path for an element to be located on a webpage.

# *What is the difference between the commands "type" and "typeAndWait" in the context of Selenium?* #

he "type" command is used to enter keyboard key values into a software web application's text box. It can also be used to choose values from a combo box, whereas the "typeAndWait" command is used when you finish typing and the software web page begins to reload. This command will wait for the page of the software program to reload before proceeding. You must use a basic "type" command if there is no page reload event when typing.

# *What is Selenium WebDriver?* #
Selenium WebDriver, also known as Selenium 2, is a browser automation framework that accepts and sends commands to a browser to implement it. It has direct control over the browser because it communicates with it directly. Java, C#, PHP, Python, Perl, and Ruby are all supported by Selenium WebDriver.

# *Is Selenium WebDriver a library?* #
Selenium WebDriver is a prominent free open-source library for automating browsers and testing web applications.

# *Is Selenium WebDriver an interface or a class?* #
Selenium WebDriver is usually a set of methods defined by an interface. The browser-specific classes, on the other hand, provide an implementation of it by extending a class. AndroidDriver, ChromeDriver, FirefoxDriver, InternetExplorerDriver, SafariDriver, and others are some of the implementation classes.

# *What are the different types of WebDriver Application Programming Interfaces in Selenium?* #
The Various Types of WebDriver APIs in Selenium are as follows:

- Opera Driver
- InternetExplorer Driver
- Chrome Driver
- Safari Driver
- Android Driver
- Firefox Driver
- Gecko Driver
- iPhone Driver
- EventFiringWebDriver
- HTMLUnit Driver.

# *What open-source frameworks does Selenium WebDriver support?* #

- TestNG:
Cédric Beust designed TestNG, a testing framework for the Java programming language that was influenced by JUnit and NUnit.
TestNG was created with the purpose of covering a wider range of test categories, including unit, functional, end-to-end, integration, and so on, with more robust and user-friendly functions.
- JUnit:
It is used for Unit Testing of various types of applications.

# *What is WebDriver's super interface?* #
SearchContext is the Super Interface of the WebDriver.

# *Is it necessary to use Selenium Server to run Selenium WebDriver scripts?* #

Selenium Server is required when distributing Selenium WebDriver scripts for execution with Selenium Grid. Selenium Grid is a Selenium functionality that allows you to execute test cases on multiple machines on various platforms. You wish to execute your test cases on a remote machine because your local machine is running numerous applications. You will need to set up the remote server so that the test cases can run on it.

# *What will happen if I execute this command? driver.get(“www.interviewbit.com”) ?* #

An exception is triggered if the URL does not begin with http or https. As a result, the HTTP protocol must be sent to the driver.get() method.

# *What is an alternative option to driver.get() method to open an URL in Selenium Web Driver?* #
driver.navigate() can be used instead. It is used for navigating forwards and backwards in a browser.

# *What are some cases that Selenium WebDriver cannot automate?* #
Some of the scenarios which we cannot automate are as follows:

- Selenium WebDriver does not support bitmap comparison.
- Using Selenium WebDriver to automate Captcha is not possible.
- Using Selenium WebDriver, we are unable to read bar codes.
- Video streaming scenarios: Selenium will almost never be able to recognise video controllers. To some extent, JavaScript Executor and flex UI selenium will work, although they are not completely dependable.
- Performance testing can be automated, however, it's preferable to avoid using Selenium for performance testing.

# *In Selenium WebDriver, what is an Object Repository?* #
Instead of hard-coding element locator data in the scripts, the Object Repository is used to store the element locator data in a centralized location. To store all of the element locators, we create a property file (.properties), which acts as an object repository in Selenium WebDriver.