import {dotenv} from "../deps.ts"
import {get} from "../common/request.ts";
import {jsonResponse} from "../utils.ts";

const env = await dotenv.load()

const projectId = "760cef62-7ac8-4400-87aa-14828b84fab2"
const token = env["ACCESS_TOKEN"]
interface DeploymentItem {
    id: string
    projectId: string
    description: string
    status: "success"
    domains: string[]
    createdAt: string
    updatedAt: string
}

export async function getDeployments(_: Request) {
    const resp = await get(`https://api.deno.com/v1/projects/${projectId}/deployments`, {
        order: 'desc',
        page: 1,
        limit: 5,
    }, {
        Authorization: `Bearer ${token}`,
    })
    const data = await resp.json()
    return jsonResponse(data.map((_: DeploymentItem) => ({
        id: _.id,
        status: _.status,
        description: _.description,
        createdAt: _.createdAt,
        updatedAt: _.updatedAt,
    })))
}
