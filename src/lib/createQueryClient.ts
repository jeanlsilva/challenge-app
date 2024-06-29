import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

import { Toast, ToasterToast } from '@/components/ui/use-toast';
import { getErrorMessage } from './utils';

type ToastProps = ({ ...props }: Toast) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};

export function createQueryClient(toast: ToastProps) {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: (err) => {
        const message = getErrorMessage(err)

        toast({
            title: 'Ocorreu um erro.',
            description: message,
            variant: "destructive"
        })
      },
    }),
    mutationCache: new MutationCache({
      onError: (err) => {
        const message = getErrorMessage(err)

        toast({
          title: 'Ocorreu um erro.',
          description: message,
          variant: 'destructive',
        })
      },
    }),
  })
}
