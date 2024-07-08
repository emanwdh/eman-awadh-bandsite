export default class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = `061c7c63-a4ba-467b-bc80-9b0806a9eb90`;
        this.baseURL = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;  
    }


    async getComments(){

        try {
            const result = await axios.get(`${this.baseURL}comments?api_key=<${this.apiKey}>`);
            let data = await result.data;
            data.sort((a,b) => {
                return a.timestamp- b.timestamp;
            });
            return data;


        }  catch(error){
            console.log(error);

        };

    };

    async postComments(newComment) {
        try{
            await axios.post(`${this.baseURL}comments?api_key=<${this.apiKey}>`, newComment, {header: {
                'Content-Type': 'application/json'
            }});
            console.log("successfully posted!");

        } catch(error){
            console.log(error);
        };

    };

    async deleteComment(commentID) {
        try {
            await axios.delete(`${this.baseURL}comments/${commentID}?api_key=<${this.apiKey}>`)
            console.log("successfully deleted!");

        } catch(error) {
            console.log(error);

        }
    };

    async addLike (commentID, likeCount) {
        try {
            await axios.put(`${this.baseURL}comments/${commentID}/like?api_key=<${this.apiKey}>`, {likes: likeCount});
            console.log("successfully liked!");

        } catch(error) {
            console.log(error);

        }
    };

    async getShows() {
        try {
            const result = await axios.get(`${this.baseURL}showdates?api_key=<${this.apiKey}>`)
            let showsData = await result.data;
            return showsData;
        } catch(error){
            console.log(error);

        }



    };





};


