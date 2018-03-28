var a = 1;
var b = 2;

function foo () {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
}

function bar() {
    b--;
    yield;
    a = (yield 8) + b;
    b = a * (yield 2);
}

function step (gen) {
    var it = gen();
    var last;
    
    return function () {
        // whatever is `yield`ed out,
        // just send it right back in the next time
        last = it.next( last ).value;
    }
}

a = 1;
b = 2;

var s1 = step( foo );
var s2 = step( bar );

// run `foo()` completely first
s1();
s1();
s1();

// now run `*bar()`
s2();
s2();
s2();
s2();

console.log( "result: ", a, b );