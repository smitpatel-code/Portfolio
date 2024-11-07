function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display="flex"
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display="none"
}
function toggleChat() {
    // Toggle the display of the chat box
    const chatContainer = document.getElementById('chatContainer');
    const openChatButton = document.getElementById('openChatButton');
    const closeChatBox=document.getElementById('closeChatBox');
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'block';
        openChatButton.style.display = 'none';
        closeChatBox.style.display='block'; // Hide the button once chat is open
    } else {
        chatContainer.style.display = 'none';
        openChatButton.style.display = 'block'; // Show the button if chat is closed
    }
}
function closeChat(){
    const chatContainer=document.getElementById('chatContainer');
    const openChatButton= document.getElementById('openChatButton');
    const closeChatBox=document.getElementById('closeChatBox');
    chatContainer.style.display= 'none';
    openChatButton.style.display='block';
    if(openChatButton.style.display ==='block'){
        closeChatBox.style.display='none';
    }
}