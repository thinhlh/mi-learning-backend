package com.thinhlh.mi_learning_backend.app.lesson.domain.usecase;

import com.thinhlh.mi_learning_backend.app.lesson.controller.dto.LessonMapper;
import com.thinhlh.mi_learning_backend.app.lesson.controller.dto.LessonResponse;
import com.thinhlh.mi_learning_backend.app.lesson.domain.service.LessonService;
import com.thinhlh.mi_learning_backend.base.BaseUseCase;
import com.thinhlh.mi_learning_backend.helper.ListHelper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class GetLessonsUseCase implements BaseUseCase<UUID, List<LessonResponse>> {

    private final LessonService lessonService;
    private final LessonMapper mapper;

    @Override
    public List<LessonResponse> invoke(UUID data) throws RuntimeException {
        return ListHelper.mapTo(lessonService.getAllLessonOfSection(data), mapper::toResponse);
    }
}
