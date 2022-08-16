import {
    DragAndDrop,
    Inject,
    ScheduleComponent,
    Week,
    Resize,
    Agenda,
    Month,
    WorkWeek,
    Day,
} from "@syncfusion/ej2-react-schedule";
import PageBox from "../../components/Layout/PageBox";
import Header from "../../components/Layout/UIComponents/Header";
import { scheduleData } from "../../data/dummyData/calendarData";

const Calendar = () => {
    return (
        <PageBox>
            <Header title="Calendar" category="App" />
            <br />
            <ScheduleComponent
                height="100vh"
                eventSettings={{ dataSource: scheduleData }}
                selectedDate={new Date(2021, 0, 10)}> 
                <Inject
                    services={[
                        Week,
                        Day,
                        WorkWeek,
                        Month,
                        Agenda,
                        Resize,
                        DragAndDrop,
                    ]}
                />
            </ScheduleComponent>
        </PageBox>
    );
};

export default Calendar;
