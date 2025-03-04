/* ###########################################################################

GLOBAL ASSETS RELEASE 2.4

MENUCONTENT.JS - v3.4

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

// translation for See All link at the end of each menu
var seeall = "See All";

// set this to the location of your local im directories
var imdir = "/im";

// sub menu width
var mwidth = 150;

// menus are organized using a two number decimel delineated system (1.2)
// the first number indicates which main topic link the menu belongs to.
// the second number indicates the order the sub topic link appears in the menu.
//
// the values for each item are then organized by a | delineated system (Link Name|URL)
// item X.0 MUST alway be the exact name of the main topic link as hardcoded in
// the masthead and must include a link that is the also the same.
//
// if the first main topic link was Products and it's URL was /products/ then then you
// would start the products menu with... 
//
// navmenu['1.0'] = 'Products|/products/';
//
// if the main topic link is not a link to another page, but simply the title of your
// menu (i.e. Select A Topic) then you would set the [X.0] item to "|". this way the
// See All Item is not created at the bottom of the menu. like...
//
// navmenu['1.0'] = '|';

navmenu['1.0'] = 'Products|http://www.sun.com/products/';
navmenu['1.1'] = 'Software|http://www.sun.com/software/';
navmenu['1.2'] = 'Desktop Systems|http://www.sun.com/desktop/';
navmenu['1.3'] = 'Servers|http://www.sun.com/servers/';
navmenu['1.4'] = 'Storage|http://www.sun.com/storage/';
navmenu['1.5'] = 'Trade-In Program|http://www.sun.com/tradeins/';
navmenu['1.6'] = 'Remanufactured Systems|http://www.sun.com/ibb/remanufactured';
navmenu['1.7'] = 'Financing|http://www.sun.com/sales/leasing/';

navmenu['2.0'] = 'Downloads|http://www.sun.com/download/';
navmenu['2.1'] = 'Solaris 10|http://www.sun.com/software/solaris/get.jsp';
navmenu['2.2'] = 'Java 2 Standard Edition|http://java.sun.com/j2se/downloads/';
navmenu['2.3'] = 'Developer Tools|http://www.sun.com/download/index.jsp?cat=Application%20Development&tab=3&subcat=Development%20Tools';
navmenu['2.4'] = 'Top Downloads|http://www.sun.com/download/index.jsp?tab=5';
navmenu['2.5'] = 'New Downloads|http://www.sun.com/download/index.jsp?tab=4';
navmenu['2.6'] = 'Patches &amp; Updates|http://www.sun.com/download/index.jsp?cat=Patches%20%26%20Updates&tab=3';

navmenu['3.0'] = 'Services &amp; Solutions|http://www.sun.com/servicessolutions/';
navmenu['3.1'] = 'Industry Solutions|http://www.sun.com/servicessolutions/industries/';
navmenu['3.2'] = 'Service Plans &amp; Warranties|http://www.sun.com/service/warrantiescontracts/';
navmenu['3.3'] = 'Consulting &amp; IT Services|http://www.sun.com/service/consulting/';
navmenu['3.4'] = 'High Performance Computing|http://www.sun.com/servers/hpc/index.jsp';
navmenu['3.5'] = 'Utility Computing|http://www.sun.com/service/sungrid/overview.jsp';
navmenu['3.6'] = 'Managed Services|http://www.sun.com/service/managedservices/';
navmenu['3.7'] = 'Secure IT Network Services|http://www.sun.com/service/sunconnection/';
navmenu['3.8'] = 'Sun Solutions Portfolio|http://www.sun.com/servicessolutions/infrastructure/';

navmenu['4.0'] = 'Support|http://sunsolve.sun.com/';
navmenu['4.1'] = 'Knowledgebase|http://sunsolve.sun.com/';
navmenu['4.2'] = 'Sun System Handbook|http://sunsolve.sun.com/handbook_pub/';
navmenu['4.3'] = 'Patches &amp; Updates|http://sunsolve.sun.com/pub-cgi/show.pl?target=patchpage';
navmenu['4.4'] = 'Documentation|http://www.sun.com/documentation/';
navmenu['4.5'] = 'Service Plans &amp; Warranties|http://www.sun.com/service/warrantiescontracts/';
navmenu['4.6'] = 'Solaris 10 Support|http://www.sun.com/software/solaris/support.jsp';

navmenu['5.0'] = 'Training|http://www.sun.com/training/';
navmenu['5.1'] = 'Course Catalog|http://www.sun.com/training/catalog/';
navmenu['5.2'] = 'Certification|http://www.sun.com/training/certification/';
navmenu['5.3'] = 'Consulting Solutions|http://www.sun.com/training/team/consulting/index.html';

navmenu['6.0'] = 'Developer|http://developers.sun.com/';
navmenu['6.1'] = 'Join Sun Developer Network|https://softwarereg.sun.com/registration/developer/en_US/login?create=1';
navmenu['6.2'] = 'APIs &amp; Docs|http://java.sun.com/reference/api/index.html';
navmenu['6.3'] = 'Forums|http://developers.sun.com/forums/';
navmenu['6.4'] = 'Java For Developers|http://java.sun.com/';
navmenu['6.5'] = 'Solaris For Developers|http://developers.sun.com/prodtech/solaris/index.html';
navmenu['6.6'] = 'Technologies|http://developers.sun.com/prodtech/index.html';


// oldmenu is an array used when changes to the A2 masthead HTML is made. since pages can
// exist that do not have the most current masthead HTML, but still link to the latest js 
// we can use this old menu information to allow the menucode.js script to insert legacy
// menu content for legacy masthead links.
//
// oldmenu items should be numbered as they once were when they were navmenu items.
// the only thing that changes is the array name. if you are using site specific
// links and you know that all changes to the masthead have been made to all of your
// pages you do not need to keep legacy menus in the oldmenu array.

oldmenu['6.0'] = 'Research|http://research.sun.com/';
oldmenu['6.1'] = 'Projects|http://research.sun.com/projects/';
oldmenu['6.2'] = 'Events|http://research.sun.com/events/';
oldmenu['6.3'] = 'Lab Downloads|http://research.sun.com/download/';

// these arrays control the flyout menus for the A1 component. there are three
// arrays that control these menus.
//
// a1menuwrap -> defines html code that makes the menu box, this should NOT be altered
//
// a1hrefs -> this array uses a value (e.g. 'javamenu') to identify it's contents. this value
//            is also used by the a1menus array and can be any value you want it to be, it just
//            needs to be unique for each menu. the value of this variable is an array. it should
//            contain the text of the link that you wish the menu to be attached to (e.g. new Array('Java');)
//            although 'Java' is only one value, an array is used in case there are other languages
//            pointing to this one file. in that case you could use something like
//            "new Array('Communities','Comunidades');" so the menu will attach to either of those links.
//
// a1menus -> this array defines the menu width and menu content. in the a1menus['javamenu'] variable
//            the first value of it's array is 180, which sets the width of the menu, the second value
//            is the menus content. each line return of this value must end with \ in order for you to use
//            multiple lines to define this value.

var a1menuwrap  = new Array('<div set_outerwidth class="a1menu" id="','">\n<div class="a1menux1" set_outerwidth></div>\n<div class="a1menuw1" set_width>\n','</div>\n<div class="a1menux2" set_outerwidth></div>\n</div>');

a1hrefs['javamenu'] = new Array('Java');
a1menus['javamenu'] = new Array(180,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/java/">Java at Sun</a></li>\
<li><a href="http://www.sun.com/software/opensource/java/">Free and Open Source Java</a></li>\
<li><a href="http://java.com/download/">Java for your computer</a></li>\
<li><a href="http://java.sun.com/javase/downloads/">Download the latest JDK</a></li>\
<li><a href="http://www.netbeans.org/downloads/index.html">Download NetBeans IDE</a></li>\
<li><a href="http://developers.sun.com/prodtech/javatools/">Java Developer Tools</a></li>\
<li><a href="http://java.sun.com/">Java Developer Resources</a></li>\
<li><a href="http://java.sun.com/javase/">Java Standard Edition</a></li>\
<li><a href="http://java.sun.com/javaee/">Java Enterprise Edition</a></li>\
<li><a href="http://java.sun.com/javame/">Java Micro Edition</a></li>\
<li><a href="http://java.sun.com/learning/training/">Java Training</a></li>\
<li><a href="http://developers.sun.com/services/">Java Support</a></li>\
</ul>\
');

a1hrefs['solarismenu'] = new Array('Solaris');
a1menus['solarismenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/software/solaris/">Solaris</a><p>The most advanced Operating System on the planet.</p></li>\
<li><a href="http://developers.sun.com/prodtech/solaris/">Solaris Developer Resources</a><p>Find what you need at the Solaris developers center.</p></li>\
<li><a href="http://developers.sun.com/services/">Solaris Developer Services</a><p>Get dedicated Solaris support and more with Sun Developer Services. </p></li>\
<li><a href="http://www.sun.com/bigadmin/home/index.html">Solaris System Administrator Resources</a><p>Get all the Solaris information you need. </p></li>\
<li><a href="http://www.opensolaris.org/">OpenSolaris</a><p>The OpenSolaris project is an open source community and a place for collaboration and conversation around OpenSolaris technology.</p></li>\
<li><a href="http://developers.sun.com/sunstudio/">Sun Studio</a><p>Industry-leading software tool that ensures high performing, robust, and reliable performance on the SPARC-Solaris and Opteron-Solaris platforms.</p></li>\
</ul>\
');

a1hrefs['communitiesmenu'] = new Array('Communities');
a1menus['communitiesmenu'] = new Array(400,'\
<table style="background:transparent;"><tr><td style="width:50%;vertical-align:top;padding-right:10px;">\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/communities/">Communities at Sun</a><p>Networks connect more than computers. Find out more about Sun communities.</p></li>\
<li><a href="http://developers.sun.com/">Developers</a><p>Join the Sun Developer Network, a worldwide community of over 2 million developers, and get your BackStage Pass to technical information,  developer tools, discounted books and training, and more.</p></li>\
<li><a href="http://www.sun.com/bigadmin/home/index.html">System Administrators</a><p>Find online articles and participate in community forums on the BigAdmin portal.</p></li>\
<li><a href="http://www.sun.com/aboutsun/investor/">Investors</a><p>Access Sun earnings announcements, annual reports, and company information.</p></li>\
<li><a href="http://www.sun.com/partners/">Partners</a><p>Sun\'s partner network delivers innovation and value to customers around the world.</p></li>\
</ul>\
</td><td style="width:50%;vertical-align:top;">\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/products-n-solutions/edu/">Education</a><p>Find out about Sun programs, software, and systems for students and educators.</p></li>\
<li><a href="http://www.sun.com/aboutsun/media/index.jsp">Press</a><p>See the latest news from Sun, and hear what the industry is saying.</p></li>\
<li><a href="http://research.sun.com/">Research</a><p>What\'s happening in Sun Labs?</p></li>\
<li><a href="http://www.sun.com/customers/index.xml">Customers</a><p>Success stories about business problems solved by collaboration with Sun.</p></li>\
<li><a href="http://java.sun.com/">Java Technology</a><p>Find out what\'s happening with the Java programming language &mdash; in mobile devices, smart cards, and data centers.</p></li>\
<li><a href="http://blogs.sun.com/">Sun Blogs</a><p>Join the conversation &mdash; meet the people at Sun who are passionate about their jobs.</p></li>\
</ul>\
</td></tr></table>\
');

a1hrefs['aboutmenu'] = new Array('About Sun');
a1menus['aboutmenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/aboutsun/media/index.jsp">News & Events</a><p>Get the latest News and Information about Sun.</p></li>\
<li><a href="http://www.sun.com/aboutsun/media/presskits/">Press Kits</a><p>Quick links to all the latest press kits.</p></li>\
<li><a href="http://www.sun.com/aboutsun/investor/">Investor Relations</a><p>Find information and resources for Sun\'s investor community.</p></li>\
<li><a href="http://www.sun.com/corp_emp/">Employment at Sun</a><p>Find jobs in countries around the globe.</p></li>\
<li><a href="http://www.sun.com/secure/contact/">Contact Sun</a><p>Find a way to get in touch.</p></li>\
<li><a href="http://www.sun.com/aboutsun/company/index.jsp">Our company</a><p>Since our inception in 1982, the vision of "The Network is the Computer" has evolved into the Participation Age. We see everyone and everything participating on the network. </p></li>\
<li><a href="http://www.sun.com/company/cgov/index.jsp">Corporate Governance</a><p>Sun has always been dedicated to the highest standards of business integrity, and over the past two decades we\'ve continually taken steps to reinforce that commitment.</p></li>\
<li><a href="http://www.sun.com/aboutsun/csr/">Environment</a><p>The economic, environmental and social sustainability of the communities where we operate is among our top priorities.</p></li>\
</ul>\
');

a1hrefs['howtobuymenu'] = new Array('How to Buy');
a1menus['howtobuymenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="http://www.sun.com/sales/index.jsp">How to Buy</a><p>Find out about buying at Sun in the U.S. and worldwide.</p></li>\
<li><a href="http://www.sun.com/sales/business/">Doing Business with Sun</a><p>eBusiness@Sun is a secure and simple way to manage your global relationship with Sun.</p></li>\
</ul>\
');

a1hrefs['accountmenu'] = new Array('My Account');
a1menus['accountmenu'] = new Array(280,'\
<ul class="bluearrows">\
<li><a href="https://portal.sun.com/portal/dt">My Sun Connection</a><p>Your personal portal to Sun products, services, and support.</p></li>\
<li><a href="https://reg.sun.com/register">Register Now</a><p>Get a login to access Sun resources.</p></li>\
</ul>\
');

a1hrefs['cartmenu'] = new Array('Cart');
a1menus['cartmenu'] = new Array(160,'\
<ul class="bluearrows">\
<li><a href="http://shop.sun.com/cart">My Cart</a></li>\
<li><a href="http://shop.sun.com/saved_items">Saved Items</a></li>\
<li><a href="http://shop.sun.com/quotes">Quotes</a></li>\
<li><a href="http://shop.sun.com/orders">Orders</a></li>\
</ul>\
');
