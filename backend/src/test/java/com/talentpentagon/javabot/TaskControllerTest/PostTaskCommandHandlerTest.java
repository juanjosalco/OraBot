package com.talentpentagon.javabot.TaskControllerTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.OffsetDateTime;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;
import com.talentpentagon.javabot.model.TaskItem;

import com.talentpentagon.javabot.JavabotApplication;
import com.talentpentagon.javabot.controller.TaskController;
import com.talentpentagon.javabot.service.TaskService;

@SpringBootTest(classes = JavabotApplication.class) //
public class PostTaskCommandHandlerTest {

    @InjectMocks
    private TaskController taskController;

    @Mock
    private TaskService taskService;

    @Test
    public void taskController_validTask_returnSuccess() {
        TaskItem taskItem = new TaskItem();
        taskItem.setId(1);
        taskItem.setTaskTitle("Task 1");
        taskItem.setDescription("Description 1");
        taskItem.setStatus("Pending");
        taskItem.setPriority(2);
        taskItem.setDueDate(OffsetDateTime.now().plusDays(10));

        ResponseEntity response = taskController.execute(taskItem);
        assertEquals(HttpStatus.OK, response.getStatusCode());

    }

    @Test
    public void taskController_invalidTask_throwsInvalidTaskException() {
        TaskItem taskItem = new TaskItem();
        taskItem.setId(1);
        taskItem.setTaskTitle("Task 1");
        taskItem.setDescription("Description 1");
        taskItem.setStatus("Pending");
        taskItem.setPriority(2);
        taskItem.setDueDate(OffsetDateTime.now().plusDays(10));
        
        NewTaskNotValidException exception = assertThrows()

    }

}
