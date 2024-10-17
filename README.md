![WEB_DEV](https://res.cloudinary.com/suberiq/image/upload/v1728323290/c4poupp9vkq0zrssaf8l.png)

# 🎏 Networking

## 🌟 IP Address
### 👉 Class A:
-  Range: 1.0.0.0 to 126.0.0.0
-  Number of Networks: 128 (excluding reserved addresses)
-  Number of Hosts per Network: Over 16 million
-  Purpose: Large networks requiring a vast number of IP addresses.
### 👉 Class B:
-  Range: 128.0.0.0 to 191.255.0.0
-  Number of Networks: 16,384
-  Number of Hosts per Network: About 65,000
-  Purpose: Medium-sized networks with a moderate number of IP addresses.
### 👉 Class C:
-  Range: 192.0.0.0 to 223.255.255.0
-  Number of Networks: Over 2 million
-  Number of Hosts per Network: About 254
-  Purpose: Small networks with a limited number of IP addresses.
### 👉 Class D:
-  Range: 224.0.0.0 to 239.255.255.255
-  Purpose: Used for multicast communication, where data is sent to multiple recipients
simultaneously.
### 👉 Class E:
-  Range: 240.0.0.0 to 255.255.255.255
-  Purpose: Reserved for experimental and future use, not assigned for standard network
operations.

## 🌟 Private IP Address Ranges
  - Private IP addresses are defined by the Internet standards and fall into specific ranges within
the IPv4 address space. These ranges are reserved for private use and are not allocated or
routable on the public Internet. The reserved ranges are:

1. Class A Private Range:
  -  Range: 10.0.0.0 to 10.255.255.255
  -  Number of Addresses: Approximately 16.7 million addresses
2. Class B Private Range:
  -  Range: 172.16.0.0 to 172.31.255.255
  -  Number of Addresses: Approximately 1 million addresses
3. Class C Private Range:
  -  Range: 192.168.0.0 to 192.168.255.255
  -  Number of Addresses: Approximately 65,000 addresses
1. Bus Topology
  - Description: All devices are connected to a single central cable, known as the bus or
backbone. Data travels in both directions along the bus.
  - Advantages:
    - Easy to set up and extend.
    - Requires less cable than other topologies.
  - Disadvantages:
    -  If the main cable fails, the entire network goes down.
    -  Performance degrades as more devices are added.
2. Star Topology
  -  Description: All devices are connected to a central hub or switch. Data passes through
the hub before reaching its destination.
  - Advantages:
    -  If one connection fails, it does not affect the rest of the network.
    -  Easy to add or remove devices.
 - Disadvantages:
    -  If the central hub fails, the entire network goes down.
    -  Requires more cable than bus topology.
3. Ring Topology
  -  Description: Each device is connected to two other devices, forming a circular pathway
for data. Data travels in one direction (or both, in a dual-ring setup).
  - Advantages:
    -  Data packets travel at high speeds.
    -  Easy to identify faults and isolate them.
  - Disadvantages:
    -  If one device fails, it can disrupt the entire network.
    -  Adding or removing devices can be disruptive.
4. Mesh Topology
  -  Description: Every device is connected to every other device, either fully or partially (in
a partial mesh).
  - Advantages:
    -  Highly reliable; if one connection fails, others can take over.
    -  Offers redundancy and multiple pathways for data.
  - Disadvantages:
    -  Expensive to implement due to the high amount of cabling and complexity.
    -  Difficult to set up and manage..
5. Hybrid Topology
  -  Description: A combination of two or more different topologies, such as star-bus or
star-ring.
  - Advantages:
    -  Flexible and scalable.
    -  Can be designed to suit specific network requirements.
  - Disadvantages:
    - Complex to design and implement.
    - Can be expensive depending on the mix of topologies used.

## 🌟 1. Local Area Network (LAN)
  - Description: A network that connects computers and devices within a limited
geographic area, such as a home, school, or office building.
  - Characteristics:
    -  High speed, low latency.
    -  Usually owned and managed by a single organization.
  - Example: Office networks, home Wi-Fi networks.
2. Wide Area Network (WAN)
  -  Description: A network that covers a broad area, often connecting multiple LANs.
WANs can span cities, countries, or continents.
  - Characteristics:
    -  Lower speeds compared to LANs, higher latency.
    -  Often owned by multiple organizations or telecommunications providers.
  -  Example: The internet, corporate networks connecting multiple locations.
3. Metropolitan Area Network (MAN)
  - Description: A network that covers a larger geographic area than a LAN but is smaller
than a WAN, typically within a city.
  - Characteristics:
    -  Can connect multiple LANs within a metropolitan area.
    -  Often used by businesses and government entities.
  - Example: City-wide Wi-Fi networks, cable TV networks.


## 🌟 How to check Number of Mac Address:
  -  Mac: networksetup -listallhardwareports
  -  Windows: getmac /v /fo list
### 👉 Range of Port Numbers
  -  Port numbers are represented as 16-bit unsigned integers, which
means they can range from 0 to 65535.
  - They are typically divided into three ranges:
    - Well-Known Ports (0-1023): These are reserved for
specific services and protocols, such as:
      - Port 80: HTTP
      - Port 443: HTTPS
      - Port 22: SSH (Secure Shell)
      - Port 25: SMTP (Simple Mail Transfer Protocol)
    -  Registered Ports (1024-49151): These are assigned by
the Internet Assigned Numbers Authority (IANA) for specific
services that are not considered standard. Applications can
use these ports for their services.
    -  Dynamic or Private Ports (49152-65535): These are
typically used for client-side applications or dynamically
assigned ports by the operating system

### 👉 Comparison Table: TCP vs. UDP
| Feature               |                        TCP                            |                 UDP             |
| --------------------- | ----------------------------------------------------- | ------------------------------- |
| Connection            | Connection-oriented (three-way handshake)             | Connectionless (no handshake) |
| Reliability            | Reliable (guaranteeddelivery, retransmission)      | Unreliable (no guarantees on delivery) |
| Ordering               | Ensures packet order                              |  No ordering of packets |
| Error Checking     | Error checking with retransmission                   | Basic error checking (but no correction) |
| Flow & Congestion Control | Yes (adjusts based on network conditions) | No flow or congestion control |
| Speed | Slower due to overhead (error checking, etc.) | Faster due to less  overhead |
| Common Use Cases | Web browsing, email, file transfer | Streaming, gaming, DNS, VoIP |
| Data Segmentation | Breaks data into segments | Sends data as independent datagrams |
| Data Size  | Supports larger data packets | Typically used for small, quick data packets |


- Hardware Port: Ethernet Adapter (en4)
- Device: en4
- Ethernet Address: 7a:cb:f1:3f:db:23
- Hardware Port: Ethernet Adapter (en5)
- Device: en5
- Ethernet Address: 7a:cb:f1:3f:db:24
- Hardware Port: Thunderbolt Bridge
- Device: bridge0
- Ethernet Address: 36:77:f5:36:3a:80
- Hardware Port: Wi-Fi
- Device: en0
- Ethernet Address: 80:a9:97:1c:c5:34
- Hardware Port: Thunderbolt 1
- Device: en1
- Ethernet Address: 36:77:f5:36:3a:80
- Hardware Port: Thunderbolt 2
- Device: en2
- Ethernet Address: 36:77:f5:36:3a:84


## 🌟 What is the OSI Model?
  - The OSI model consists of 7 layers of networking.
  
    `How to remember all the names of the layers? Easy: `

     1. Please | Physical Layer
     2. Do | Data Link Layer
     3. Not | Network Layer
     4. Tell (the) | Transport Layer
     5. Secret | Session Layer
     6. Password (to) | Presentation Layer
     7. Anyone | Application Layer

  `Let’s look at it with an Example: Luffy sends an e-mail to his friend Zoro.`

    - Step 1: Luffy interacts with e-mail application like Gmail , outlook , etc. Writes his email to send. (This happens in Layer 7: Application layer )

    - Step 2: Mail application prepares for data transmission like encrypting data and formatting it for transmission. (This happens in Layer 6: Presentation Layer )

    - Step 3: There is a connection established between the sender and receiver on the internet. (This happens in Layer 5: Session Layer )

    - Step 4: Email data is broken into smaller segments. It adds sequence number and error-checking information to maintain the reliability of the information. (This happens in Layer 4: Transport Layer )

    - Step 5: Addressing of packets is done in order to find the best route for transfer. (This happens in Layer 3: Network Layer )

    - Step 6: Data packets are encapsulated into frames, then MAC address is added for local devices and then it checks for error using error detection. (This happens in Layer 2: Data Link Layer )

    - Step 7: Lastly Frames are transmitted in the form of electrical/ optical signals over a physical network medium like ethernet cable or WiFi.

  - **After the email reaches the receiver i.e. Zoro, the process will reverse and decrypt the e-mail content. At last, the email will be shown on Zoro’s email client.**


---
# 🎏 HTML

1. Install Visual Studio Code
This is a free piece of software from Microsoft that you will use to
write your code.
`https://code.visualstudio.com/`
2. Install Visual Studio Code Extensions
Extensions are like plugins that extend the functionality of VSCode.
Here are the ones that I've installed. Click on the link and then click on
the "install" button and it should automatically install it in your VSCode
application.
Live Preview
Prettier
vscode-icons

## 🌟Inline Elements:

- a> - Anchor (link)
- abbr> - Abbreviation
- acronym> - Acronym (deprecated in HTML5)
- b> - Bold text
- bdo> - Bi-directional override
- big> - Bigger text (deprecated in HTML5)
- br> - Line break
- button> - Button (can be block or inline depending on context)
- cite> - Citation
- code> - Inline code snippet
- dfn> - Definition term
- em> - Emphasis (usually italic)
- i> - Italic text
- img> - Image
- input> - Input field (can be block or inline depending on context)
- kbd> - Keyboard input
- label> - Label for input
- map> - Client-side image map
- mark> - Highlighted text
- meter> - Scalar measurement within a known range
- noscript> - Fallback content if scripts are disabled
- object> - Embedded object (like multimedia files)
- output> - Result of a calculation
- progress> - Progress bar
- q> - Inline quotation
- s> - Strikethrough text
- samp> - Sample output from a computer program
- script> - Inline script (can also be placed in the head or body, but by default inline)
- select> - Drop-down list
- small> - Smaller text
- span> - Generic inline container for grouping content
- strong> - Strong emphasis (usually bold)
- sub> - Subscript text
- sup> - Superscript text
- textarea> - Multi-line text input
- time> - Date/time
- tt> - Teletype text (deprecated in HTML5)
- u> - Underlined text
- var> - Variable in a mathematical expression or programming context
- wbr> - Word break opportunity

## 🌟Block Elements:

- address> - Contact information for the author or owner of the content
- article> - Independent content
- aside> - Content aside from the main content (e.g., sidebars)
- blockquote> - Long quotation
- canvas> - Drawing area for JavaScript (HTML5)
- dd> - Definition description (used inside - dl>)
- div> - Generic container for block-level content
- dl> - Description list
- dt> - Definition term (used inside - dl>)
- fieldset> - Group of input fields and labels
- figcaption> - Caption for a figure
- figure> - Group of media content like images and captions
- footer> - Footer section of a document or section
- form> - Form for user input
- h1> to - h6> - Header elements from most important (- h1>) to least (- h6>)
- header> - Header section of a document or section
- hr> - Horizontal rule (a line or separator)
- li> - List item (used inside - ul>, - ol>, or - menu>)
- main> - Main content area of the document
- nav> - Navigation links
- ol> - Ordered list
- p> - Paragraph
- pre> - Preformatted text (preserves whitespace and line breaks)
- section> - Section of content
- table> - Table container
- tbody> - Table body
- td> - Table data cell (inside - tr>)
- tfoot> - Table footer
- th> - Table header cell (inside - tr>)
- thead> - Table header
- tr> - Table row
- ul> - Unordered list
- video> - Video player
- audio> - Used to embed an audio player into a webpage.
- details> - A collapsible content section (HTML5)
- dialog> - A dialog box or window (HTML5)
- summary> - Summary for - details> (HTML5)

---
# 🎏 CSS

### 👉 1: Child property
### 👉 2: CSS color:
1. Named color
2. RGB color
3. Hexadecimal Colors
4. Alpha (transparent to opaque)
5. HSL Colors
  - HSL stands for hue, saturation, and lightness. Hue is the
color type (a degree on the color wheel from 0 to 360),
saturation is the intensity of the color (0% is grayscale, 100%
is fully saturated), and lightness defines how light or dark the
color is (0% is black, 100% is white).
6. background-color
  - background-size: cover; To cover entire element
  - background-repeat: no-repeat; Prevents the image from repeating
### 👉 3: CSS fonts
1. font-family
2. Font-size
  - 10px
  - 2em
  - 3 rem
  - 120%
  - Viewport width 20vw (20% of viewportwidth)
  - Viewport height 20vh
3. Font-weight (normal, bold, or numerical
values from 100 to 900.)
4. Font-style (italic, oblique, or normal.)
5. Font-variant () // Homework
6. line-height: 1.5; /* 1.5 times the font
size */
7. letter-spacing
8. Word-spacing
9. Text-transform
10. Font-stretch // Homework
## 🌟Cascading:
  - Order
  - Specificity
    - ID
    - Attribute
    - Class
    - Child and descendent
    - Element and group element
  - Type
    - Inline
    - Internal and external css
  - Important

## 🌟Priority 
  `First !important > inline style > depend ordering (internal & external styles ) > ID > Attribute > class > depend ordering (child & descendent)> depend ordering ( Element & group element)`

## 🌟CSS Homework Assignment Instructions
### 👉 Objective: Create a CSS file to style an HTML page. Follow the
instructions below to write your own CSS code.
Instructions:
1. Set Global Styles:
  - Use the body tag to set:
    - ■ font-family to 'Verdana', sans-serif;
    - ■ color to #333
    - ■ background-color to #f0f0f0
2. Style the Header:
  - Create a style for the header tag:
    - ■ Set background-color to #4CAF50
■ Change color to white
3. Heading Styles:
  - For the h1 tag:
    - ■ Set font-size to 3em
    - ■ Use font-weight as bold
  - For the h2 tag:
    - ■ Set font-size to 1.5em
    - ■ Set color to #FFD700
4. Article Styles:
  - For the article tag, set background-color to
white.
  - Style headings (h3) and paragraphs (p) within the
.css-article class with different font sizes and
colors.
5. List Styles:
  - For h4 tags:
    - ■ Set color to #FF69B4
    - ■ Set font-size to 1.5em
6. Table Styles:
  - For the table element, set background-color to
#f9f9f9.
  - Style the th elements with background-color of
#007BFF and color as white.
7. Footer Styles:
  - For the footer, set color to #333 and
background-color to #ccc



---
# 🎏 JavaScript
