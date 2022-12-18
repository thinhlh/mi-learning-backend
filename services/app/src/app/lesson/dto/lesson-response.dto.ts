import { Note } from "src/app/note/note.entity";

export class VideoLesson {
    videoUrl: string
    length: number
}
export class TestLesson { }

export class LesosnMetaData {
    notes: Note[];
    finished: boolean;
    playback: number
}
export class LessonResposeDTO {
    id: string;
    title: string;
    lessonOrder: number;
    videoLesson: VideoLesson;
    metadata: LesosnMetaData
}