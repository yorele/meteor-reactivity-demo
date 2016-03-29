/**
 * Created by emmanuel on 3/28/16.
 */

Template.widget_session.helpers({
    "value": function () {
        return Session.get('selection');
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


Template.select_session.events({
    "change select": function (event, template) {
        Session.set('selection', event.currentTarget.value);
    }
});