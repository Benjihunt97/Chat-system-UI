$(document).ready(() => {

    // messages to the left side of the caht system
    const inbox = [
        {
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uJTIwcHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww',
            name: 'Sarah Johnson',
            msg: 'You have a new...',
            time: '3 hours ago',
            state: 'green'
        },
        {
            img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uJTIwcHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww',
            name: 'Clark Williams',
            msg: 'I have a great new...',
            time: '16 hours ago',
            state: 'amber'
        },
        {
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Sophie Ashmore',
            msg: 'I found the cds in...',
            time: '2 days ago',
            state: 'green'
        },
        {
            img: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Emma Burke',
            msg: 'Hey, how are you...',
            time: '2 days ago',
            state: 'green'
        },
        {
            img: 'https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbiUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Ashmad Rush',
            msg: 'I sent over the...',
            time: '4 days ago',
            state: 'gray'
        },
        {
            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbiUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Becky Winderson',
            msg: 'I finally got the...',
            time: '6 days ago',
            state: 'gray'
        },
        {
            img: 'https://media.istockphoto.com/id/1391812172/photo/relaxed-man-breathing-fresh-air.webp?b=1&s=170667a&w=0&k=20&c=r5OQFfKJDbraT0G-1GGrriLph-MLrlscH575UryH1M4=',
            name: 'Adam Herling',
            msg: 'Sent a GIF',
            time: 'over a week ago',
            state: 'orange'
        },
    ];

    const updateInboxTextVisibility = () => {
        const screenWidth = $(window).width();
        if (screenWidth <= 640) {
            $('.chats .inbox-text').hide(500);
        } else {
            $('.chats .inbox-text').show(500);
        }
    };

    // Append message cards to the chats container
    $.each(inbox, (index, item) => {
        let msgCard = `
            <div class="inbox-item flex gap-4 text-sm hover:bg-slate-100 transition-all cursor-pointer p-4 overflow-hidden">
                <div class="relative mx-auto md:mx-0">
                    <div class="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-${item.state}-500"></div>
                    <img src="${item.img}" alt="" class="w-[40px] h-[40px] object-cover rounded-full inbox-img">
                </div>
                <div class="inbox-text flex w-full">
                    <div>
                        <h3 class="font-bold inbox-name">${item.name}</h3>
                        <p class="msg font-semibold text-xs">${item.msg}</p>
                    </div>
                    <p class="time text-xs ml-auto text-slate-500">${item.time}</p>
                </div>
            </div>
        `;

        $('.chats').append(msgCard);
    });

    // Initialize and update visibility on window resize
    updateInboxTextVisibility();
    $(window).on('resize', updateInboxTextVisibility);

    // Changing the chat display to the selected inbox msg
    $('.inbox-item').on('click', (e) => {
        const inboxImg = $(e.currentTarget).find('.inbox-img').attr('src');
        const inboxName = $(e.currentTarget).find('.inbox-name').text();

        $('#chat-head-img').attr('src', inboxImg);
        $('#chat-head-name').text(inboxName);
    });

})
