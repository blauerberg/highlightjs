# highlightjs

## Configuration

Check the file ./js/highlightjsInit.js in order to change selectors. Currently hilighting every &lt;code&gt;&lt;/code&gt; tag.

Change 'code' in the following line to your selector. 

````
 $('code', context) ...
````

Highlightjs defaults is: &lt;pre&gt;<code&gt;&lt;/code&gt;&lt;/pre&gt;.

Which would result:

````
 $('pre code', context) ...
````

Libraries in this module are loaded from cdnjs.cloudflare.com
See: ./highlightjs.libraries.yml

## Read more

https://highlightjs.org/usage/

http://highlightjs.readthedocs.org/en/latest/
