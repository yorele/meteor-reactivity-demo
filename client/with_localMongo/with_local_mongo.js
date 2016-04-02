/**
 * Created by emmanuel on 3/28/16.
 */

Selections = new Mongo.Collection(null);

Template.widget_local_mongo.helpers({
    "value": function() {
        var selection = Selections.findOne({_id: 'selection' + this.id});
        //var selection = Selections.findOne({_id: 'selection'});
        return selection ? selection.value : "";
    },
    "onSelectionChange": function() {
        var self = this;
        return function(value) {
            Selections.upsert({_id:"selection" + self.id},{$set: {value: value}});
            //Selections.upsert({_id:"selection"},{$set: {value: value}});
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


Template.select_local_mongo.events({
    "change select": function(event, template) {
        this.onChange(event.currentTarget.value);
    }
});