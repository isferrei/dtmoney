import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import { TransactionModal } from "./components/TransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  return (
    <TransactionsProvider>
      <Header onOpenModal={() => setIsNewTransactionModalOpen(true)} />

      <Dashboard />

      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => setIsNewTransactionModalOpen(false)}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
