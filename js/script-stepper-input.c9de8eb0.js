$(document).ready(function(){!function(){let t=$(".stepper-input");t.each(function(){let t=$(this).find(".stepper-input__input"),n=$(this).find(".stepper-input__container").find("input"),e=$(this).find(".stepper-input__button--left"),i=$(this).find(".stepper-input__button--right");e.click(function(){let e=parseInt(t.text());t.text(e+1),n.attr("value",e+1)}),i.click(function(){let e=parseInt(t.text());e>1&&(t.text(e-1),n.attr("value",e-1))})})}()});
//# sourceMappingURL=script-stepper-input.c9de8eb0.js.map
