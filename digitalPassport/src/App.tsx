import './App.css'
import PageWrapper from './components/PageWrapper/PageWrapper'
import { FanzoneContextProvider } from './context/FanzoneContextProvider'
import Screens from './components/Screens/Screens'

function App() {
    return (
        <FanzoneContextProvider>
            <div className="App">
                <PageWrapper>
                    <Screens />
                </PageWrapper>
            </div>
        </FanzoneContextProvider>
    )
}

export default App
