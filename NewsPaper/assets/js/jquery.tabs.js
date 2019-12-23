(function ($, window, document, undefined) {


    var tabs = $("#tabs");

    /*-------------------------------
              FN CREATE NAV
    -------------------------------*/
    function createNav() {

        var ul = $(".tabs-nav__item");

        if (!ul.length) {
            ul = $("<ul></ul>", {
                "class": "tabs-nav"
            });
            ul.prependTo(tabs);
        }
        return ul;
    }

    /*-------------------------------
                PLUG-IN 
    -------------------------------*/
    $.fn.tabs = function () {

        createNav()

        return this.each(function () {

            var that = $(this),
                tabsItem = that.find(".tabs__item");


            /*-------------------------------
                     EACH CREATE NAV
            -------------------------------*/

            var tabsTitle = tabsItem.find(".heading"),
                ul = $(".tabs-nav__item");

            tabsTitle.each(function (i, e) {

                var that = $(this),
                    tabTitle = that.text()
                li = $("<li></li>", {
                    "class": "tabs-nav__item"
                })

                var listAppend = li.appendTo("ul");
                listAppend = listAppend.text(tabTitle)

            });


            /*-------------------------------
                    ADD CLASS & HIDE
            -------------------------------*/

            var tabsNav = that.find("li.tabs-nav__item"),
                activeClass = "tabs-nav_item--active";

            tabsNav.first().addClass(activeClass);
            
            tabsItem.not(":first").hide();

            tabsNav.on("click", function () {

                var tabNav = $(this),
                    index = tabNav.index();

                if (tabNav.hasClass(activeClass)) return;

                tabsNav.removeClass(activeClass);
                tabNav.addClass(activeClass);

                tabsItem.hide();
                tabsItem.eq(index).fadeIn(300);

            }); //.click
        });//.each
    };//.fn.tabs

})(jQuery, window, document);
