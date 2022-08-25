const oneSecondInMilliSeconds = 1000
const oneMinuteInMilliSeconds = oneSecondInMilliSeconds * 60

export const reactQueryConstants = {
    oneSecondInMilliSeconds,
    oneMinuteInMilliSeconds,
    useInfiniteClothes: {
        staleTime: oneSecondInMilliSeconds * 15,
    },
}
