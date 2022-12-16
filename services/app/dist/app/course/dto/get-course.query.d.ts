export declare enum GetCourseType {
    FOR_YOU = "FOR_YOU",
    ME = "ME"
}
export declare class GetCourseQuery {
    loadSections?: boolean;
    loadLessons?: boolean;
    type: GetCourseType;
}
