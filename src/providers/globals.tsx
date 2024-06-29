'use client'

import React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { useToast } from '@/components/ui/use-toast'
import { createQueryClient } from '@/lib/createQueryClient'

function Providers({ children }: React.PropsWithChildren) {
    const { toast } = useToast()
    const [client] = React.useState(() => createQueryClient(toast))

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers
