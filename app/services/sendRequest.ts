export const sendRequest = async (
  id: string,
  reason: string
): Promise<{ status: number; id: string; reason: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, id, reason });
    }, 1000);
  });
};
