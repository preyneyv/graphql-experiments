export interface IConfiguration {
    /**
     * The type of schema configuration.
     * "online":  connect to a live GQL server. can run queries.
     * "offline": use a local schema definition file. can't run queries
     */
    type: "online" | "offline"
    online: {
        /**
         * GQL API url.
         */
        url: string
        /**
         * HTTP request method to use.
         */
        method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
        /**
         * Request headers.
         */
        headers: {
            key: string
            value: string
        }[]
    }
    offline: {
        filename: string
    }
}
