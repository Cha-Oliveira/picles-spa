import { getShelter } from "../services/shelter/getShelter";
import { IShelter } from "../interfaces/shelter";
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";

export function useShelter(options?: Partial<UseQueryOptions<IShelter, Error>>): UseQueryResult<IShelter, Error> {
    const result = useQuery({
        staleTime: Infinity,
        ...options,
        queryKey:['get-shelter'],
        queryFn:() => getShelter()
    })

    return result
}
