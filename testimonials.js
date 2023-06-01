var prods = ["Throughout my sales career, I have worked with several consultants with varying degrees of success.  Mike Spirakis blows them all away.  Before I met Mike, I struggled to get 1-2 appointments per month, and just last week, I set 7 appointments.  His method is not only effective, but it is also easy to implement.  In addition, he is fun, encouraging, and a cheerful person.  He makes the entire process enjoyable, which is saying a lot for cold-calling!"];

var execs = ["Mike's coaching helped me build a critical foundation to excelling in the insurance business.   At our company we target validating within 3 - 5 years and with Mike's coaching I was able to validate in less than 3 years.  I'd highly recommend Mike if you're looking to grow an agency organically.  Mike has been able to not only successfully help the young producers, but also the seasoned producers who are looking to grow large books."];




document.getElementById("drop").onclick = function() 
{
    checkDrop();
}

function checkDrop()
{

    if (document.getElementById("drop").value == "execs")
    {
        for(i =0; i<execs.length; i++)
        {
            document.getElementsByClassName("quote")[i].innerHTML = execs[i];

        }
    }

    if (document.getElementById("drop").value == "producers")
    {
        for(i =0; i<prods.length; i++)
        {
            document.getElementsByClassName("quote")[i].innerHTML = prods[i];

        }
    }



}