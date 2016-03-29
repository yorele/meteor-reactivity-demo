/**
 * Created by emmanuel on 3/28/16.
 */

Template.widget_reactive_var.onCreated(function(){
    this.selection = new ReactiveVar("");
});

Template.widget_reactive_var.helpers({
    "value": function() {
        return Template.instance().selection.get();
    },
    "onSelectionChange": function() {
        var ti = Template.instance();
        return function(value) {
            ti.selection.set(value);
        }
    },
    "model": function () {
        return {
            carOptions: [
                {value: "Audi"},
                {value: "Mercedes"},
                {value: "BMW"},
                {value: "Volkswagen"}
            ]
        }
    }
});


Template.select_reactive_var.events({
    "change select": function(event, template) {
        this.onChange(event.currentTarget.value);
    }
});