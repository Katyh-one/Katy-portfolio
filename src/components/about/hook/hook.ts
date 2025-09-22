export type AboutResult = {
    data: { title: string; content: string }[];
    loading: boolean;
    error: boolean;
};

export const useAboutContent = (): AboutResult => {

    return {
        data: [
            { title: "About Me", content: "I am a recent career changer who moved from being a test engineer to an associate software engineer. I took this step as I took part in Sky's Get into tech programme. The programme taught me HTML, CSS, Python and Flask. From here i applied to the graduate programme at Sky and started in September 2024. I attended a bootcamp that taught me React, JavaScript, Docker, Jenkins. Following that I completed a graduate project in android kotlin. I am now currently working on a team in React framework using JavaScript and Typescript." }
        ],
        loading: false,
        error: false
    };
}