$(document).ready(function(){
    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
});


$(document).ready(function(){
    $("ul#tabs1 li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs1 li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#taba1 li.active").removeClass("active");
            $("ul#taba1 li:nth-child("+nthChild+")").addClass("active");
        }
    });
});