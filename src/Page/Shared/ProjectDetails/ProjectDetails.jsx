import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProjectDetails = () => {
    const { pathname } = useLocation()
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const id = pathname.split("/")[2]
    const findData = projects.find(project => project.id == id)
    const {
        brief_description,
        challenges_faced_developing_the_project,
        github_repo_link,
        improvement_and_future_plan,
        live_project_link,
        main_technology_stack,
        project_img,
        project_name } = findData || {}
    console.log(projects)
    return (
        <div className="min-h-[100vh] text-white">
            <img className="w-6/12 mx-auto mt-20" src={project_img} alt="" />
            <div className="flex justify-center gap-36 my-5">
                <Link to={live_project_link}>
                    <h1 className="border p-2 px-4 rounded text-lg bg-gradient-to-r from-[#3b0000e5] to-[#141414] hover:bg-slate-400 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 w-[200px] text-center">
                        Live Link
                    </h1>
                </Link>
                <Link to={github_repo_link}>
                    <h1 className="border p-2 px-4 rounded text-lg bg-gradient-to-r from-[#1a1a1ae5] to-[#141414] hover:bg-slate-400 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 w-[200px] text-center">
                        Github repository
                    </h1>
                </Link>

            </div>
            <p className="text-center w-1/2 mx-auto mt-10 text-gray-300">{brief_description}</p>
            <div className="flex justify-center gap-5 mt-10">
                {
                    main_technology_stack?.map((technology) => <div
                        className=" py-4 px-8 text-2xl text-white bg-gradient-to-r from-[#1a1a1ae5] to-[#141414] rounded-br-3xl rounded-tl-3xl max-w-[300px] hover:bg-slate-400 shadow-xl hover:shadow-2xl"
                        key={technology?.id}>
                        {technology}
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;