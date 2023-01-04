"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=l(a),m=n,u=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return a?r.createElement(u,i(i({ref:t},h),{},{components:a})):r.createElement(u,i({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={title:"Password Protected Keys",slug:"/passphrases-protected-keys"},i=void 0,o={unversionedId:"reference-client/password-protected-keys",id:"reference-client/password-protected-keys",title:"Password Protected Keys",description:"Overview",source:"@site/docs/reference-client/password-protected-keys.mdx",sourceDirName:"reference-client",slug:"/passphrases-protected-keys",permalink:"/passphrases-protected-keys",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/reference-client/password-protected-keys.mdx",tags:[],version:"current",frontMatter:{title:"Password Protected Keys",slug:"/passphrases-protected-keys"},sidebar:"tutorialSidebar",previous:{title:"Logging Reference",permalink:"/logging-reference"},next:{title:"Chia on Raspberry Pi",permalink:"/chia-on-raspberry-pi"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Motivation",id:"motivation",level:2},{value:"New Keyring",id:"new-keyring",level:2},{value:"Migration",id:"migration",level:2},{value:"Command Line Reference",id:"command-line-reference",level:2},{value:"Setting/Updating/Removing Passphrases",id:"settingupdatingremoving-passphrases",level:3},{value:"Passphrase Hints",id:"passphrase-hints",level:3},{value:"Reading Passphrases From a File",id:"reading-passphrases-from-a-file",level:3},{value:"Additional Notes",id:"additional-notes",level:2}],h={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We are introducing a new feature that allows users to specify a passphrase to protect their Chia keys across all currently supported platforms. Along with passphrase protection, this feature also introduces a new keyring file for storing those keys. By implementing a common key storage format, moving Chia keys between installations is greatly simplified, eliminating the need to re-enter each key's 24-word mnemonic. Any keys stored in the new keyring will be encrypted using a key derived from the specified passphrase."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Your passphrase protects only from local access of your Chia client. ",(0,n.kt)("strong",{parentName:"p"},"You must still protect your 24 words.")),(0,n.kt)("p",{parentName:"admonition"},"Chia is unable to assist with the recovery of a forgotten passphrase. Be sure to ",(0,n.kt)("strong",{parentName:"p"},"backup the 24-word mnemonic")," for each of your keys. If you forget your passphrase, you will be able to recover by importing your keys from their 24-word mnemonic.")),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"Chia's supported platforms each provide different solutions for storing sensitive data, with varying levels of security and different user experiences per platform. In addition, these platform dependent solutions for storing sensitive data did not provide a mechanism for the user to passphrase-protect Chia keys outside of whatever protection the OS already provided."),(0,n.kt)("p",null,"On Linux, the cryptfile keyring Python module has been used with a fixed key."),(0,n.kt)("p",null,"On macOS, the Keychain is used to securely store each key, sometimes requiring one or more system prompts to authorize access to the key material."),(0,n.kt)("p",null,"This resulted in a system where keys were considered to be secure on systems, but that level of security was subjective to individual use cases and OS configuration, and not suitable for everyone's needs. Our primary goals with this passphrase feature have been to grant more control to our users, uniformly secure Chia keys, and to simplify the task of moving keys from one installation to another."),(0,n.kt)("h2",{id:"new-keyring"},"New Keyring"),(0,n.kt)("p",null,"The new keyring file is a YAML document named ",(0,n.kt)("inlineCode",{parentName:"p"},"keyring.yaml"),". Upon launch, Chia will automatically create an empty ",(0,n.kt)("inlineCode",{parentName:"p"},"keyring.yaml")," file residing at:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"%HOMEDRIVE%%HOMEPATH%/.chia_keys/keyring.yaml")," (Windows)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"~/.chia_keys/keyring.yaml")," (macOS and Linux)"),(0,n.kt)("p",null,"Note that in this release, any new keys created or imported will be stored in the new ",(0,n.kt)("inlineCode",{parentName:"p"},"keyring.yaml")," file and not in the previous location."),(0,n.kt)("p",null,"Keys in this new keyring file are encrypted using ChaCha20-Poly1305 (",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7539.html#section-2.8"},"RFC 7539, Section 2.8"),") which provides encryption and authentication (AEAD). The encryption key is derived from the user's passphrase using PBKDF2 with SHA-256 (",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2898"},"RFC 2898"),")."),(0,n.kt)("h2",{id:"migration"},"Migration"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"We ",(0,n.kt)("strong",{parentName:"p"},"STRONGLY")," recommend that users create backups of their 24-word mnemonic before migrating their keys.")),(0,n.kt)("p",null,"Existing users with keys will want to migrate their keys from the previous location to the new ",(0,n.kt)("inlineCode",{parentName:"p"},"keyring.yaml")," file, and optionally protect those keys with a passphrase. We recommend all users create a strong passphrase. On macOS and Windows, users will have the option to save their passphrase to the macOS Keychain or Windows Credential Manager respectively, allowing for Chia to run unattended (such as after a reboot due to a power failure)."),(0,n.kt)("p",null,"When launching the Chia GUI application, a migration prompt will automatically appear if existing keys are detected. The GUI migration process is nearly instantaneous and will not delete or modify those keys that were found. It's strongly encouraged that users perform the migration step right away to move to the new keyring. If necessary, it's possible to skip the migration step and continue using Chia as before, however, any attempts to add or delete a key will first require completion of the migration process."),(0,n.kt)("p",null,"From the command line interface, keyring migration can be initiated by setting a passphrase for the new keyring, or by adding or deleting a key. When performing keyring migration from the command line, the user will have the option of deleting those old keys that were found and successfully migrated."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"It is possible to migrate keys to the new key storage and not set a passphrase. In this case, the ",(0,n.kt)("inlineCode",{parentName:"p"},"keyring.yaml")," file will remain encrypted with a fixed key. When you remove a passphrase, that passphrase will also be removed from the macOS Keychain or Windows Credential Manager (if saved there by the user).")),(0,n.kt)("h2",{id:"command-line-reference"},"Command Line Reference"),(0,n.kt)("h3",{id:"settingupdatingremoving-passphrases"},"Setting/Updating/Removing Passphrases"),(0,n.kt)("p",null,"Setting or updating a passphrase for keyring.yaml. This will prompt for keyring migration as necessary:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chia passphrase set\n")),(0,n.kt)("p",null,"When setting a passphrase, an optional hint may be specified. This hint will be displayed by the GUI when prompting for your keyring passphrase:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'chia passphrase set --hint "Summer of 2020"\n')),(0,n.kt)("p",null,"Removing a passphrase from ",(0,n.kt)("inlineCode",{parentName:"p"},"keyring.yaml"),". Note, keyring.yaml always keeps keys stored in an encrypted form. Without a user-specified passphrase, a fixed encryption is used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chia passphrase remove\n")),(0,n.kt)("h3",{id:"passphrase-hints"},"Passphrase Hints"),(0,n.kt)("p",null,"A passphrase hint can be set to assist in remembering the keyring passphrase. The hint data is stored in keyring.yaml as cleartext (not encrypted)."),(0,n.kt)("p",null,"Setting a passphrase hint when a passphrase is in use. This command will fail if a passphrase hasn't been previously set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'chia passphrase hint set "Summer of 2020"\n')),(0,n.kt)("p",null,"Removing a passphrase hint. This command will fail if a passphrase and passphrase hint haven't been previously set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chia passphrase hint delete\n")),(0,n.kt)("p",null,"Displaying a passphrase hint. This command will fail if a passphrase and passphrase hint haven't been previously set:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chia passphrase hint display\n")),(0,n.kt)("h3",{id:"reading-passphrases-from-a-file"},"Reading Passphrases From a File"),(0,n.kt)("p",null,"Passphrases may be accessed from a file (or file descriptor on macOS/Linux) to assist with automated workflows. Note that whitespace is not stripped from the passphrase when read from a file."),(0,n.kt)("p",null,"Reading the passphrase from a file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'chia --passphrase-file "~/.my_chia_passphrase" keys show\n')),(0,n.kt)("p",null,"Reading the passphrase from another process (on macOS/Linux):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chia --passphrase-file <(echo -n 'my super secure passphrase') keys show\n")),(0,n.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,n.kt)("p",null,"On macOS and Windows, an option is available to save the passphrase to the OS-provided secure credential store (macOS Keychain or Windows Credential Manager). This option may help with automated workflows, but carries a risk that other processes may be able to read the saved passphrase without requiring user authorization. For this reason, it's recommended that users only save their passphrase if they fully trust their environment."),(0,n.kt)("p",null,"To facilitate downgrading to a prior version of Chia, keys will be left intact in their old locations after migration (unless migrating from the command line, and the option to delete old keys was selected)."),(0,n.kt)("p",null,"If necessary, it's possible to temporarily disable passphrase support as well as usage of the new keyring. To disable passphrase and keyring support, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"CHIA_PASSPHRASE_SUPPORT")," environment variable to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," and run Chia as you normally would. Once disabled, Chia will use the old location for key retrieval and storage."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export CHIA_PASSPHRASE_SUPPORT=false; chia start farmer\n")))}d.isMDXComponent=!0}}]);