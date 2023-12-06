//your JS code here. If required.
function myFunction() {
    console.log(arguments.callee.name);
}

myFunction();  // This will print "myFunction"