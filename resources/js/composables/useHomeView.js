import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export function useHomeView() {
    const { result, loading } = useQuery(gql`
        query usersList {
            usersList {
                data {
                    id
                    name
                    email
                    address
                }
            }
        }
    `);

    return {result, loading};
}
