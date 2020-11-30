function eventCalendar() {
  return $('#calendar').fullCalendar({
    defaultView: 'listYear',
    buttonText: {
      today: 'Today'
    },
    eventRender: function (event, element, view) {
      var description = event.description ? event.description : "";
      var location = event.location ? event.location : "";
      element.find(".fc-event-dot").css('display','none');
      element.find('.fc-list-item-title').append('<div></div><span style="font-size: 12px">' + description + '</span>');
      element.find('.fc-list-item-title').append('<div></div><span style="font-size: 12px">' + location + '</span>');
    },
    events: '/manage/events.json',
    eventClick: function (info) {
      window.location = "events/" + info.id;
    },
    height: "auto",
  });
}

function clearCalendar() {
  $('#calendar').fullCalendar('delete');
  $('#calendar').html('');
}

document.addEventListener('turbolinks:load', function () {
  eventCalendar();
});
document.addEventListener('turbolinks:before-cache', clearCalendar);
