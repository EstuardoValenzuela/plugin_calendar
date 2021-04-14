
//Javascript para funcionamento del calendario
//Cualquiera modificacion en el calendario se realiza desde aqui



document.addEventListener('DOMContentLoaded', function() {
var enviar = document.querySelector("#btnAgregar");
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
        initialDate: '2020-09-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectMirror: true,
        select: function(arg) {
                $("#FormularioEventos").modal();
                // if (title) {
                //           calendar.addEvent({
                //             title: title,
                //             start: arg.start,
                //             end: arg.end,
                //             allDay: arg.allDay
                //           })
                //         }
                var titulo = document.getElementById("titulo");
                // //Asi se agrega un evento
                // calendar.addEvent({
                //               title: titulo,
                //               start: '2020-09-10T12:00:00'
                //             })
                calendar.unselect()
                },
        eventClick: function(arg) {
                      var fecha = arg.event.start;
                      var title= arg.event.title;
                      var description1 = arg.event.description;
                      $("#modalEventos").modal();
                      document.getElementById("fecha_inicio").value=fecha;  
                     // document.getElementById("descripcion").value=description1;  
                      document.getElementById("titulo").value=title;  
                      document.getElementById('Label1').innerHTML = title;
                      },
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [ //Los eventos se crean mediante archivos
                  {
                   title: 'All Day Event',
                   description: 'This is a cool event',
                   start: '2020-09-01'
                  },
                  {
                  title: 'Long Event',
                  start: '2020-09-07',
                  end: '2020-09-10'
                  },
                  {
                  groupId: 999,
                  title: 'Repeating Event',
                  start: '2020-09-09T16:00:00'
                  },
                  {
                   groupId: 999,
                   title: 'Repeating Event',
                   start: '2020-09-16T16:00:00'
                   },
                  {
                  title: 'Conference',
                  start: '2020-09-11',
                  end: '2020-09-13'
                  },
                  { 
                  title: 'Meeting',
                  start: '2020-09-12T10:30:00',
                  end: '2020-09-12T12:30:00'
                  },
                  {
                  title: 'Lunch',
                  start: '2020-09-12T12:00:00'
                  },
                  {
                    title: 'Meeting',
                    start: '2020-09-12T14:30:00'
                  },
                  {
                    title: 'Happy Hour',
                    start: '2020-09-12T17:30:00'
                  },
                  {
                    title: 'Dinner',
                    start: '2020-09-12T20:00:00'
                  },
                  {
                    title: 'Birthday Party',
                    start: '2020-09-13T07:00:00'
                  },
                  {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2020-09-28'
                  }
                ],
                eventColor: '#378006'
              });
        
  calendar.render();
});
                