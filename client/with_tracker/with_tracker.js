Template.widget_tracker.onCreated(function(){
    this.tracker = new Tracker.Dependency;
    this.selection = null;
});

Template.widget_tracker.helpers({
    "value": function() {
        // We tell our helper that this value must be updated
        // with our tracker.
        Template.instance().tracker.depend();
        return Template.instance().selection;
    },
    "onSelectionChange": function() {
        var ti = Template.instance();
        return function(value) {
            ti.selection = value;
            // We tell our tracker that the value has changed.
            ti.tracker.changed();
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


Template.select_tracker.events({
    "change select": function(event, template) {
        this.onChange(event.currentTarget.value);
    }
});