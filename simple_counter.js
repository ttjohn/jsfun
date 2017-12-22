var counter = (function() {
        // your module code goes here
        var counter = 0 ;
        return {
            increment:function() {
                counter = counter + 1;
                return counter;
            },
            reset:function() {
                return counter = 0;    
            }  
        }   
    }());
    alert(counter.increment());
    alert(counter.increment());
    alert(counter.reset())
