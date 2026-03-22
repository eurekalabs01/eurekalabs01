// ============================================================================
//
//  EUREKA LABS — SITE DATA
//
//  This file contains ALL the content displayed on the site.
//  To update the site, edit the data below, commit, and push to GitHub.
//
//  See README.md for detailed instructions and examples.
//
// ============================================================================


// ----------------------------------------------------------------------------
//  CATEGORIES
//
//  Each key becomes a filter button and a tag color.
//  Order here = order in the filter bar.
//
//  To add a new category:
//    1. Add a key below with label, color, and bg.
//    2. Use that key in any lab's "categories" array.
//
//  color = text color on the tag pill (pick a dark shade)
//  bg    = background color on the tag pill (pick a light tint)
// ----------------------------------------------------------------------------

const CATEGORIES = {

  mobile: {
    label: "Mobile",
    color: "#1d6b52",
    bg:    "#e4f2ec",
  },

  network: {
    label: "Network",
    color: "#2a6f97",
    bg:    "#e5f0f7",
  },

  system: {
    label: "System",
    color: "#c45a2d",
    bg:    "#faeee8",
  },

  ai: {
    label: "AI",
    color: "#6b4f8a",
    bg:    "#f0eaf6",
  },

  genai: {
    label: "Gen AI",
    color: "#a84860",
    bg:    "#f8e8ec",
  },

  deeplearning: {
    label: "Deep Learning Security",
    color: "#a67c30",
    bg:    "#f5edda",
  },

  quantum: {
    label: "Quantum",
    color: "#4a6670",
    bg:    "#e8eef0",
  },

};


// ----------------------------------------------------------------------------
//  LEVELS
// ----------------------------------------------------------------------------

const LEVELS = {

  fundamental: {
    label: "Fundamental",
    color: "#5c5a52",
    bg:    "#e6e2da",
  },

  advanced: {
    label: "Advanced",
    color: "#2a6f97",
    bg:    "#e5f0f7",
  },

  challenging: {
    label: "Challenging",
    color: "#c45a2d",
    bg:    "#faeee8",
  },

};


// ----------------------------------------------------------------------------
//  TEAM
// ----------------------------------------------------------------------------

const TEAM = [

  {
    name:        "Liran Ma",
    role:        "Principal Investigator",
    affiliation: "Miami University",
  },

  {
    name:        "Samer Khamaiseh",
    role:        "Co-Investigator",
    affiliation: "Miami University",
  },

  {
    name:        "Curby Alexander",
    role:        "Co-Investigator",
    affiliation: "Miami University",
  },

  {
    name:        "Yang Zhang",
    role:        "Collaborator",
    affiliation: "Miami University",
  },

];


// ----------------------------------------------------------------------------
//  LABS
//
//  Each lab needs:
//    id          — URL-safe slug (used in lab.html?id=this-value)
//    title       — Display name
//    categories  — Array of category keys, e.g. ["mobile", "network"]
//    level       — One of the keys from LEVELS above
//    description — Full description shown on the lab detail page
//
//  Optional fields (shown on the lab detail page if provided):
//    objectives  — Array of learning objective strings
//    resources   — Array of { label, url } objects (links to PDFs, GitHub, etc.)
//    authors     — Array of author name strings
//    updated     — Last updated date string, e.g. "2025-09-15"
//
//  Labs appear on the home page in the order listed here.
// ----------------------------------------------------------------------------

const LABS = [

  // --- Mobile Security ---

  {
    id:          "wep-passive",
    title:       "WEP Cracking via Passive Listening",
    categories:  ["mobile"],
    level:       "fundamental",
    description: "The purpose of this lab is to understand and exploit the security vulnerabilities of an 802.11 WEP-secured network. You will passively collect enough WEP IVs (Initialization Vectors) to determine the WEP encryption key. After obtaining the key, you will need to masquerade as a legitimate WEP client on the network, access a server, and download a file.",
    objectives:  [
      "Understand WEP encryption and its known weaknesses",
      "Capture wireless traffic and collect Initialization Vectors",
      "Recover a WEP key from captured IVs",
      "Connect to a WEP-secured network using a recovered key",
    ],
  },

  {
    id:          "wep-active",
    title:       "WEP Cracking via Active Injection",
    categories:  ["mobile"],
    level:       "fundamental",
    description: "The purpose of this lab is to continue exploring the vulnerabilities of the 802.11 WEP security protocol. In the passive listening lab, we explored methods of exploiting WEP flaws when a large amount of data was present. However, it is unlikely that a sufficiently large data stream is present on a network during regular usage. In this lab, we will use more efficient active injection techniques to continue exploiting the WEP protocol.",
    objectives:  [
      "Understand active packet injection techniques",
      "Accelerate IV collection through ARP replay attacks",
      "Compare active vs. passive WEP cracking efficiency",
    ],
  },

  {
    id:          "wpa-handshake",
    title:       "WPA-PSK Key Cracking via Handshake Capture",
    categories:  ["mobile"],
    level:       "fundamental",
    description: "WPA replaced WEP with stronger encryption, but its Pre-Shared Key (PSK) mode is crackable due to a flaw in the authentication procedure. An effective way to crack WPA-PSK is to force re-authentication of a legitimate client and capture the four-way handshake. A robust dictionary attack may then recover the password, making it potentially easier to crack WPA-PSK than WEP.",
    objectives:  [
      "Understand the WPA four-way handshake process",
      "Force client deauthentication to capture a handshake",
      "Perform dictionary attacks against captured handshakes",
      "Evaluate password strength against cracking attacks",
    ],
  },

  {
    id:          "wps-unlock",
    title:       "\u201cUnlock\u201d Wi-Fi Protected Setup (WPS)",
    categories:  ["mobile"],
    level:       "advanced",
    description: "Wi-Fi Protected Setup (WPS) is a push-button authentication method for WPA2 Personal-secured networks. WPS relies mainly on physical security, or the idea that a potential attacker needs to be physically present to compromise the system. However, this lab will demonstrate how a remote WPS attack is still possible.",
    objectives:  [
      "Understand how WPS authentication works",
      "Identify WPS-enabled access points",
      "Perform a remote WPS PIN brute-force attack",
      "Evaluate the security implications of WPS",
    ],
  },

  {
    id:          "wpa2-enterprise",
    title:       "Secure your WiFi with WPA2-Enterprise",
    categories:  ["mobile"],
    level:       "advanced",
    description: "The purpose of this lab is to set up a WPA/WPA2 Enterprise (TKIP/AES + EAP-TTLS/PEAP) wireless network using FreeRadius and OpenWRT on a router. In addition, you will configure Linux/Windows/Android clients to connect to the network.",
    objectives:  [
      "Set up a FreeRadius authentication server",
      "Configure OpenWRT for WPA2-Enterprise",
      "Connect clients using EAP-TTLS and PEAP",
      "Understand the differences between WPA2-Personal and WPA2-Enterprise",
    ],
  },

  {
    id:          "mobile-platform",
    title:       "Mobile Lab Platform for Users",
    categories:  ["mobile"],
    level:       "fundamental",
    description: "In this document, we first introduce how to create a user lab platform to perform activities for our Eureka labs. Next, we will exercise with a few important wireless-related commands. Lastly, we will perform a rudimentary wireless network survey with these tools and commands.",
    objectives:  [
      "Set up the Eureka Labs user platform",
      "Learn essential wireless CLI commands",
      "Perform a basic wireless network survey",
    ],
  },

  {
    id:          "hide-and-seek",
    title:       "\u201cHide-and-Seek\u201d in Wireless",
    categories:  ["mobile"],
    level:       "fundamental",
    description: "In this basic lab, we will set up a simple wireless network with SSID hiding enabled. Students will be tasked to perform wireless network hide-and-seek (a simple wireless penetration test).",
    objectives:  [
      "Configure a wireless network with a hidden SSID",
      "Discover hidden wireless networks using scanning tools",
      "Understand why SSID hiding is not a strong security measure",
    ],
  },

  {
    id:          "mischievous-mac",
    title:       "Mischievous MAC?",
    categories:  ["mobile"],
    level:       "challenging",
    description: "Carrier Sense Multiple Access (CSMA) is a probabilistic media access control (MAC) protocol in which a node verifies the absence of other traffic before transmitting on a shared medium. In this lab, we will observe how traffic is regulated by CSMA/CA and learn to detect abuses and misbehavior targeted at the MAC layer.",
    objectives:  [
      "Understand how CSMA/CA regulates wireless traffic",
      "Observe normal and abnormal MAC-layer behavior",
      "Detect MAC-layer misbehavior and protocol abuse",
    ],
  },

  {
    id:          "walls-have-ears",
    title:       "Walls Have Ears",
    categories:  ["mobile"],
    level:       "fundamental",
    description: "The purpose of this lab is to inspire interest in mobile security by demonstrating the possibility of wireless tapping. We will explore security vulnerabilities associated with wireless-based VoIP services, showing how a third party may intercept and replay phone conversations.",
    objectives:  [
      "Understand wireless VoIP security vulnerabilities",
      "Capture and analyze wireless VoIP traffic",
      "Replay captured voice conversations",
    ],
  },

  {
    id:          "video-aficionado",
    title:       "Video Aficionado",
    categories:  ["mobile"],
    level:       "challenging",
    description: "The purpose of this lab is to understand and exploit the vulnerabilities of open-access mobile data for privacy breaches. While mobile devices have rigorous access control mechanisms to protect sensitive data, not all mobile data is strictly prohibited. It is possible to infer private information from open-access data such as power consumption patterns.",
    objectives:  [
      "Understand side-channel attacks on mobile devices",
      "Analyze power consumption patterns to infer private data",
      "Evaluate the privacy risks of open-access mobile data",
    ],
  },

  {
    id:          "one-pixel-attack",
    title:       "\u201cPixie and Dixie vs. Mr. AI\u201d: One-Pixel Attack",
    categories:  ["mobile"],
    level:       "advanced",
    description: "The purpose of this lab is to understand and exploit vulnerabilities of deep neural networks used in IoT. Image data and a trained deep neural network model are typically used to classify images on mobile and IoT devices. You will pinpoint a vulnerable pixel such that changing it results in wrong classification prediction, potentially confusing security modules.",
    objectives:  [
      "Understand adversarial attacks on deep neural networks",
      "Identify vulnerable pixels in image classifiers",
      "Execute a one-pixel attack to cause misclassification",
      "Discuss implications for IoT security systems",
    ],
  },

  {
    id:          "wpa3-dragonfly",
    title:       "WPA3-SAE: A Dragonfly Aims to Fix Wi-Fi\u2019s Wings",
    categories:  ["mobile"],
    level:       "advanced",
    description: "In January 2018, WPA3 was announced as a replacement to WPA2. The WPA3 standard replaces pre-shared key (PSK) exchange with Simultaneous Authentication of Equals (SAE). However, just one year after launch, researchers unveiled serious vulnerabilities in the protocol that could allow attackers to recover Wi-Fi network passwords.",
    objectives:  [
      "Understand the WPA3-SAE (Dragonfly) handshake",
      "Compare WPA3 security improvements over WPA2",
      "Explore known Dragonblood vulnerabilities",
      "Evaluate practical implications for Wi-Fi security",
    ],
  },

  {
    id:          "enhanced-open",
    title:       "Same, Same But Encrypted: An Enhanced Open Wi-Fi Network",
    categories:  ["mobile"],
    level:       "advanced",
    description: "Wi-Fi Enhanced Open is a new security standard for public networks based on Opportunistic Wireless Encryption (OWE). It provides encryption and privacy on open, non-password-protected networks in areas such as cafes, hotels, restaurants, and libraries.",
    objectives:  [
      "Understand Opportunistic Wireless Encryption (OWE)",
      "Set up a Wi-Fi Enhanced Open network",
      "Compare security of open vs. Enhanced Open networks",
    ],
  },

  {
    id:          "wpa-pmkid",
    title:       "WPA-PSK Key Cracking with Pairwise Master Key Identifier",
    categories:  ["mobile"],
    level:       "advanced",
    description: "In this attack lab, the capture of a full EAPOL four-way handshake is not required. The new attack is performed on the RSN IE (Robust Security Network Information Element) of a single EAPOL frame, making it a faster and more practical attack vector.",
    objectives:  [
      "Understand PMKID-based attacks on WPA-PSK",
      "Capture RSN Information Elements from EAPOL frames",
      "Crack WPA-PSK without a full handshake capture",
      "Compare PMKID attacks to traditional handshake attacks",
    ],
  },

  // --- Mobile + Network ---

  {
    id:          "evil-twin",
    title:       "Evil Twin AP Attacks and Prevention",
    categories:  ["mobile", "network"],
    level:       "advanced",
    description: "An evil twin is a malicious access point set up to copy the identity of a real access point in order to eavesdrop and steal sensitive information. This attack tricks unsuspecting users into connecting to it, enabling man-in-the-middle and phishing attacks.",
    objectives:  [
      "Set up an evil twin access point",
      "Demonstrate how users can be tricked into connecting",
      "Perform man-in-the-middle attacks via evil twin",
      "Implement detection and prevention techniques",
    ],
  },

  // --- Network Security ---

  {
    id:          "xss",
    title:       "XSS Attack and Defense",
    categories:  ["network"],
    level:       "fundamental",
    description: "Cross-Site Scripting (XSS) attacks are a type of injection in which malicious scripts are injected into otherwise benign and trusted websites. This lab explores how XSS attacks work and how to defend against them.",
    objectives:  [
      "Understand reflected and stored XSS attack types",
      "Inject malicious scripts into a vulnerable web application",
      "Implement input validation and output encoding defenses",
    ],
  },

  {
    id:          "take-my-coin",
    title:       "Take My Coin!",
    categories:  ["network"],
    level:       "fundamental",
    description: "A blockchain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. In this lab, we will exercise coin mining and block creation.",
    objectives:  [
      "Understand blockchain structure and cryptographic linking",
      "Perform coin mining operations",
      "Create and validate new blocks",
      "Explore proof-of-work consensus mechanisms",
    ],
  },

  {
    id:          "identity-demystified",
    title:       "Identity Demystified",
    categories:  ["network"],
    level:       "advanced",
    description: "A public key certificate is an electronic document used to prove ownership of a public key. The certificate includes information about the key, the identity of its owner, and the digital signature of an entity that has verified the certificate's contents. This lab explores how digital certificates and PKI work.",
    objectives:  [
      "Understand public key infrastructure (PKI)",
      "Create and sign digital certificates",
      "Verify certificate chains of trust",
      "Explore real-world certificate usage in HTTPS",
    ],
  },

  {
    id:          "not-so-personal-data",
    title:       "Not-so-Personal Data",
    categories:  ["network"],
    level:       "challenging",
    description: "This lab serves as an experiment guide for using Generative Adversarial Networks (GANs) in privacy attack and privacy protection scenarios.",
    objectives:  [
      "Understand how GANs can be used for privacy attacks",
      "Generate synthetic data using GANs",
      "Explore GAN-based privacy protection techniques",
    ],
  },

  {
    id:          "ethereum",
    title:       "Nothing Ethereal About Ethereum",
    categories:  ["network"],
    level:       "advanced",
    description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency. The Ethereum network is a peer-to-peer network consisting of multiple nodes running the Ethereum client such as Geth.",
    objectives:  [
      "Set up an Ethereum development environment with Geth",
      "Write and deploy a simple smart contract",
      "Execute transactions on a local Ethereum network",
      "Understand Ethereum consensus and gas mechanisms",
    ],
  },

  {
    id:          "kerberos",
    title:       "This Kerberos Never Sleeps",
    categories:  ["network"],
    level:       "fundamental",
    description: "Kerberos is a network authentication protocol designed to provide strong authentication for client/server applications using secret-key cryptography. It works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity in a secure manner.",
    objectives:  [
      "Understand Kerberos ticket-based authentication",
      "Set up a Key Distribution Center (KDC)",
      "Authenticate clients using Kerberos tickets",
      "Analyze Kerberos protocol messages",
    ],
  },

  // --- Network + System ---

  {
    id:          "passing-passwords",
    title:       "Passing on Passwords",
    categories:  ["network", "system"],
    level:       "fundamental",
    description: "When passwords are compromised, they can lead to unintentional data access, putting users at risk. This lab investigates how passwords are transmitted across networks and the risks of unencrypted credential exchange.",
    objectives:  [
      "Capture network traffic containing password transmissions",
      "Compare encrypted vs. unencrypted credential exchange",
      "Understand the risks of plaintext password transmission",
    ],
  },

  {
    id:          "bleeding-heart",
    title:       "Bleeding Heart",
    categories:  ["network", "system"],
    level:       "advanced",
    description: "The Heartbleed bug was a serious vulnerability in OpenSSL. The weakness allowed attackers to steal information protected by SSL/TLS encryption by reading the memory of affected systems, compromising secret keys, user credentials, and actual content.",
    objectives:  [
      "Understand the Heartbleed vulnerability mechanism",
      "Exploit Heartbleed to read server memory",
      "Extract sensitive data from vulnerable systems",
      "Apply patches and verify remediation",
    ],
  },

  {
    id:          "invisible-surfing",
    title:       "\u201cInvisible\u201d Surfing",
    categories:  ["network", "system"],
    level:       "advanced",
    description: "We all need safe access to the Internet free from technology-facilitated threats such as cyberstalking and harassment. This lab explores personally identifiable information awareness and technologies such as VPNs that protect identity information via encryption.",
    objectives:  [
      "Identify personally identifiable information in network traffic",
      "Set up and configure a VPN connection",
      "Compare browsing privacy with and without a VPN",
      "Evaluate different privacy-enhancing technologies",
    ],
  },

  {
    id:          "poodle",
    title:       "This POODLE Bites!",
    categories:  ["network", "system"],
    level:       "challenging",
    description: "The POODLE (Padding Oracle On Downgraded Legacy Encryption) attack exploits SSL 3.0 to steal information from secure connections including cookies, passwords, and encrypted browser data. It allows attackers to decrypt network traffic between a client and a server.",
    objectives:  [
      "Understand the POODLE vulnerability and padding oracle attacks",
      "Force a protocol downgrade to SSL 3.0",
      "Exploit the padding oracle to decrypt traffic",
      "Implement mitigations against downgrade attacks",
    ],
  },

  {
    id:          "intruder-hunt",
    title:       "Intruder Hunt",
    categories:  ["network", "system"],
    level:       "advanced",
    description: "An intrusion detection system (IDS) is a device or software application that monitors a network or systems for malicious activity or policy violations. Any intrusion activity is typically reported to an administrator or collected centrally using a SIEM system.",
    objectives:  [
      "Install and configure an intrusion detection system",
      "Write custom detection rules",
      "Detect and analyze simulated attack traffic",
      "Evaluate IDS effectiveness and tune for false positives",
    ],
  },

  {
    id:          "zombie-apocalypse",
    title:       "Zombie Apocalypse: DoS Attacks and Defense",
    categories:  ["network", "system"],
    level:       "advanced",
    description: "In this lab, we will launch various denial-of-service (DoS) attacking techniques in an attempt to slow down or completely prevent legitimate access to a service, and learn how to adopt appropriate technologies to defend against these attacks.",
    objectives:  [
      "Execute various DoS attack techniques",
      "Observe the impact of DoS attacks on services",
      "Implement rate limiting and traffic filtering defenses",
      "Configure firewall rules to mitigate DoS attacks",
    ],
  },

  {
    id:          "ransomwhale",
    title:       "RansomWhale Unleashed",
    categories:  ["network", "system"],
    level:       "advanced",
    description: "Ransomware poses an ongoing and ever-evolving threat to computer security, jeopardizing data integrity and rendering files and systems useless. These attacks involve malicious software that encrypts victim data, holding it hostage and demanding a ransom for decryption.",
    objectives:  [
      "Understand ransomware attack lifecycle and techniques",
      "Observe ransomware behavior in a controlled environment",
      "Analyze encryption mechanisms used by ransomware",
      "Implement backup and recovery strategies",
    ],
  },

  // --- System Security ---

  {
    id:          "crypto-flickered",
    title:       "Crypto Flickered!",
    categories:  ["system"],
    level:       "advanced",
    description: "Length extension attacks can cause serious vulnerabilities when people mistakenly construct an HMAC by using hash(secret || message). Many hash functions are subject to length extension due to their internal compression function design, allowing an attacker who knows the hash of an n-block message to find the hash of longer messages.",
    objectives:  [
      "Understand how Merkle\u2013Damg\u00e5rd hash functions work",
      "Exploit length extension vulnerabilities",
      "Demonstrate why hash(secret || message) is insecure",
      "Implement proper HMAC construction",
    ],
  },

  {
    id:          "shell-shattered",
    title:       "Shell Shattered",
    categories:  ["system"],
    level:       "fundamental",
    description: "Shellshock is a security bug in the Unix Bash shell that could enable an attacker to cause Bash to execute arbitrary commands and gain unauthorized access to many Internet-facing services that use Bash to process requests.",
    objectives:  [
      "Understand the Shellshock vulnerability mechanism",
      "Craft malicious environment variables to exploit Bash",
      "Gain unauthorized access via a vulnerable web server",
      "Apply patches and verify the fix",
    ],
  },

  {
    id:          "leaky-database",
    title:       "A \u201cLeaky\u201d Database",
    categories:  ["system"],
    level:       "advanced",
    description: "SQL injection is a code injection technique used to attack data-driven applications. Malicious SQL statements are inserted into entry fields for execution, exploiting security vulnerabilities where user input is not properly filtered or typed.",
    objectives:  [
      "Understand SQL injection attack vectors",
      "Extract data from a vulnerable database",
      "Bypass authentication using SQL injection",
      "Implement parameterized queries as defense",
    ],
  },

  {
    id:          "toadally-safe-password",
    title:       "Creating a \u201cToadally-Safe\u201d Password",
    categories:  ["system"],
    level:       "fundamental",
    description: "Passwords serve as the first line of defense for securing online accounts. In today\u2019s digital landscape, it is crucial to understand the significance of creating strong and secure passwords to fortify accounts against attackers who seek to exploit personal information.",
    objectives:  [
      "Evaluate the strength of various password patterns",
      "Understand common password cracking techniques",
      "Create passwords that resist dictionary and brute-force attacks",
      "Explore multi-factor authentication as an additional defense",
    ],
  },

];
