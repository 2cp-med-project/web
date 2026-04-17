import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect, useState } from "react";
import "temporal-polyfill/global";
import { usePlanningContext } from "../context.tsx";
import { AppointmentEvent } from "./AppointmentEvent.tsx";

export function Schedule() {
  const { appointments, selectAppointment } = usePlanningContext();

  const [eventsService] = useState(() => createEventsServicePlugin());

  const viewDay = createViewDay();
  const calendar = useCalendarApp({
    views: [
      viewDay,
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [],
    locale: "fr-FR",
    firstDayOfWeek: 7,
    defaultView: viewDay.name,
    selectedDate: Temporal.Now.plainDateISO(),
    dayBoundaries: {
      start: "08:00",
      end: "18:00",
    },
    isResponsive: true,
    callbacks: {
      onEventClick(calendarEvent) {
        selectAppointment(calendarEvent.id.toString());
      },
      onEventUpdate(updatedEvent) {
        console.log("Event updated:", updatedEvent);
      },
    },
    plugins: [eventsService],
  });

  useEffect(() => {
    const events = appointments.map((a) => ({
      ...a,
      title: "Appointment",
      start: Temporal.ZonedDateTime.from({
        timeZone: "Africa/Algiers",
        year: a.start.getFullYear(),
        month: a.start.getMonth() + 1,
        day: a.start.getDate(),
        hour: a.start.getHours(),
        minute: a.start.getMinutes(),
      }),
      end: Temporal.ZonedDateTime.from({
        timeZone: "Africa/Algiers",
        year: a.end.getFullYear(),
        month: a.end.getMonth() + 1,
        day: a.end.getDate(),
        hour: a.end.getHours(),
        minute: a.end.getMinutes(),
      }),
    }));

    eventsService.set(events);
  }, [appointments, eventsService]);

  return (
    <div className="overflow-hidden rounded-[18px] border border-[#d8efe8] bg-white shadow-[0_10px_25px_-18px_rgba(17,78,62,0.35)]">
      <ScheduleXCalendar
        calendarApp={calendar}
        customComponents={{
          timeGridEvent: AppointmentEvent,
        }}
      />
    </div>
  );
}
