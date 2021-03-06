package com.thinhlh.mi_learning_backend.app.note.data.service;

import com.thinhlh.mi_learning_backend.app.lesson.controller.dto.CreateNoteRequest;
import com.thinhlh.mi_learning_backend.app.lesson.controller.dto.LessonMapper;
import com.thinhlh.mi_learning_backend.app.lesson.data.repository.StudentLessonRepository;
import com.thinhlh.mi_learning_backend.app.note.data.repository.NoteRepository;
import com.thinhlh.mi_learning_backend.app.note.domain.entity.Note;
import com.thinhlh.mi_learning_backend.app.note.domain.service.NoteService;
import com.thinhlh.mi_learning_backend.exceptions.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {

    private final StudentLessonRepository studentLessonRepository;
    private final NoteRepository noteRepository;

    private final LessonMapper lessonMapper;

    @Override
    @Transactional
    public Note createOrUpdateNote(CreateNoteRequest request) {
        Note note;
        if (request.getId() != null) {
            note = noteRepository.findById(request.getId()).orElse(null);

            if (note != null) {
                note.setContent(request.getContent());
            }
        } else {
            var studentLesson = studentLessonRepository.findByStudent_User_EmailAndLessonId(request.getEmail(), request.getLessonId());

            if (studentLesson != null) {
                note = lessonMapper.createNoteRequestToNote(request);
                note.setStudentLesson(studentLesson);

                return noteRepository.save(note);
            } else throw new NotFoundException();
        }

        return note;
    }
}
