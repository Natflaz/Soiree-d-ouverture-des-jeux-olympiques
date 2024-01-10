import {getAllConversations, getConversationsForUser} from "@/services/messagerie.service";

export default {
    state:{
        conversations: []
    },
    getter:{
        getConversations : state => state.conversations,
    },

    mutation:{
        SET_CONVERSATIONS(state,conversations){
            state.conversations = conversations;
        },
    },

    action:{
        //-----------------------------------------------------------------------Messagerie--------------------------------------------------------------------//

        async getConversationsAdminStore({commit}){
            try {
                const result = await getAllConversations();
                if (Array.isArray(result)) {
                    commit('SET_CONVERSATIONS', result);
                } else {
                    console.error("Unexpected response format:", result);
                }
            } catch (err) {
                console.error("Error in getConversations():", err);
            }
        },
        async getConversationsUserStore({commit}){
            try {
                const result = await getConversationsForUser(this.$store.getters['user.getUserId'],this.$store.getters['user.getSessionId']);
                if (Array.isArray(result)) {
                    commit('SET_CONVERSATIONS', result);
                } else {
                    console.error("Unexpected response format:", result);
                }
            } catch (err) {
                console.error("Error in getConversations():", err);
            }
        }
    }
}
