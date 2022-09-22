// const friendList = [
//     { id: 1, name: 'Phoebe' },
//     { id: 2, name: 'Rachel' },
//     { id: 3, name: 'Ross' },
//   ];
  
  function ChatRecipientPicker() {
    let test = 0; 
    const onclick = ()=>{
      if(test === 0){
        const add = test + 1 
        document.getElementById('divp').innerHTML = add

      }else{

      }
    }
    // const [recipientID, setRecipientID] = useState(1);
    // const isRecipientOnline = useFriendStatus(recipientID);
  
    return (
      <div>
        <button onClick={onclick}>
          show 11
        </button>
        <p id="divp">{onclick}</p>
      </div>
    //   <>
    //     <Circle color={isRecipientOnline ? 'green' : 'red'} />
    //     <select
    //       value={recipientID}
    //       onChange={e => setRecipientID(Number(e.target.value))}
    //     >
    //       {friendList.map(friend => (
    //         <option key={friend.id} value={friend.id}>
    //           {friend.name}
    //         </option>
    //       ))}
    //     </select>
    //   </>
    
    );
  }

  export default ChatRecipientPicker;